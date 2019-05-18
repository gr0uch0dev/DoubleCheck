#!/usr/bin/env node
'use strict';
const program = require('commander');
const recordInstance = require("./lib/web3_interactions.js");

//const {interface, bytecode} = require('./compile.js');

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//console.log(interface)

program
  .command('new <sendingAddress>')
  .description('Builds and deploy a new TokenizedDB')
  .action(sendingAddress => recordInstance.deploy(sendingAddress));

program
  .command('add <sendingAddress> <contractAddress> <code>' +
           '<field1> <field2> <field3> <field4> <field5>')
  .description('Add new record')
  .action((sendingAddress, contractAddress, code, field1, field2, field3,
           field4, field5) => {
    try{
      recordInstance.addRecord(sendingAddress, contractAddress, code, field1,
                               field2, field3, field4, field5);
    }catch(err){
      console.log(err);
      console.log("Something went wrong");
      console.log("Are you sure to be entitled to call the method?")
    }});
