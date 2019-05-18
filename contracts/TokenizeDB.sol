pragma solidity >=0.4.25 <0.6.0;

// PROBLEM: SOLC does not allow for github import
import 'https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';

contract TokenizeDB is ERC721{

    // ############
    // public
    // ############

    constructor() public{
        contractOwner = msg.sender;
    }


    function registerCodeWithHash(string memory _code, string memory _hash)
        public
        onlyCreator
    returns (uint)
    {
        uint recordId = addRecord( Record({idcode: _code, hash: _hash, valid: true}) );
        return recordId;
    }

    function getRecordHash(uint _recordId)
        public
        view
    returns (string memory hash)
    {
        Record memory record = records[_recordId];
        require(record.valid,"no record registered with this ID");
        return (
            record.hash
        );
    }

    // ############
    // private
    // ############

    address private contractOwner;

    mapping(uint => Record) private records;

    uint private numRecords;
    string private DefaultOwnerId = "SUDO";

    struct Record {
        string idcode;
        string hash;
        bool valid;
    }

    function addRecord(Record memory _record)
        private
    returns (uint)
    {
        uint recordId = numRecords;
        records[recordId] = _record;
        numRecords++;
        return recordId;
    }
    //modifiers
    modifier onlyCreator() {
        require(msg.sender == contractOwner,"only contract creator can do it");
        _;
    }
}
