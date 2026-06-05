import { expect } from "chai";
import { network } from "hardhat";

describe("Counter", function () {
  it("Should start with count = 0", async function () {
    const { ethers } = await network.connect();

    const Counter = await ethers.getContractFactory("Counter"); //Counter = Car Factory
    const counter = await Counter.deploy();  //counter = meri actual car

    expect(await counter.count()).to.equal(0n);
  });

  it("Should increment the count", async function () {
    const { ethers } = await network.connect();

    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    await counter.increment();

    expect(await counter.count()).to.equal(1n);
  });
});