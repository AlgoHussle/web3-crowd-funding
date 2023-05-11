//    ___    __            __  __                __   
/   /   |  / /___ _____  / / / /_  ____________/ /__ 
  / /| | / / __ `/ __ \/ /_/ / / / / ___/ ___/ / _ \
 / ___ |/ / /_/ / /_/ / __  / /_/ (__  |__  ) /  __/
/_/  |_/_/\__, /\____/_/ /_/\__,_/____/____/_/\___/ 
         /____/                                     

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        address[] donators;
        uint256[] donations; // Fixed the type of the donations array
    }

    mapping(uint256 => Campaign) public campaigns; // Fixed the key type of the mapping

    uint256 public numberOfCampaigns = 0; // Renamed to campaigns with a lowercase "c"

    function createCampaign(address _owner, string memory _title, string memory 
    _description, uint256 _target, uint256 _deadline) public returns (uint256) {
        Campaign storage campaign = campaigns[numberOfCampaigns];

        require(_deadline > block.timestamp, "The deadline should be a date in the future"); // Fixed the condition to check if the deadline is in the future

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;

        numberOfCampaigns++;

        return numberOfCampaigns - 1;
    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        (bool sent, ) = payable(campaign.owner).call{value:amount}("");

        if(sent) {
            campaign.amountCollected += amount;
        }
    }

    function getDonators(uint256 _id) view public returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns(uint256 _id) view public returns (Campaign memory) {
        return campaigns[_id];
    }
}
