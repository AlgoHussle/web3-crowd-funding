
const hre = require("hardhat");

async function main() {




  const CrowdFunding = await hre.ethers.getContractFactory("Lock");
  const crowdFunding = await CrowdFunding.deploy();

  await crowdFunding.deployed();

  console.log(
    `CrowdFunding deployed to ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
