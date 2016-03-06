#!/usr/bin/env node

const adjectiveAnimal=require("adjective-animal");

if(process.argv[2]=="list" && process.argv[3])
  console.log(adjectiveAnimal.generateNameList(process.argv[3]).join("\n"));
else
  console.log(adjectiveAnimal.generateName());
