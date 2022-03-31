const hre = require("hardhat");

async function main() {
  const ApeBlockClub = await hre.ethers.getContractFactory(
    "ApeBlockClub"
  );
  const deployedApeBlockClub = await ApeBlockClub.deploy(
  );

  await deployedApeBlockClub.deployed();

  console.log(
    "Deployed ApeBlockClub Address:",
    deployedApeBlockClub.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });