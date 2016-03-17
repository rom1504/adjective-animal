"use strict";

const fs=require("fs");

function fileToArray(file)
{
  return file
    .split("\n")
    .map(animal => animal.toLowerCase().trim().replace(" ","-"))
    .filter(a => a!="");
}

const animals=fileToArray(fs.readFileSync(__dirname+"/"+"animals.txt","utf8"));
const adjectives=fileToArray(fs.readFileSync(__dirname+"/"+"adjectives.txt","utf8"));

function generateName()
{
  return adjectives[Math.round(Math.random()*adjectives.length)]+"-"+animals[Math.round(Math.random()*animals.length)];
}

function generateNameList(n)
{
  const arr=[];
  for(let i=0;i<n;i++)
    arr.push(generateName());
  return arr;
}

module.exports.generateName=generateName;
module.exports.generateNameList=generateNameList;
