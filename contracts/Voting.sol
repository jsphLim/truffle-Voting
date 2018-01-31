pragma solidity ^0.4.18; 
contract Voting {

  mapping (bytes32 => uint8) public votesReceived;
  
  
  bytes32[] public candidateList;

  function Voting() public {
    candidateList.push("zhang");
    candidateList.push("bin");
    candidateList.push("cheng");
  }

  function totalVotesFor(bytes32 candidate) view public returns (uint8) {
    require(validCandidate(candidate));
    return votesReceived[candidate];
  }

  function voteForCandidate(bytes32 candidate) public {
    require(validCandidate(candidate));
    votesReceived[candidate] += 1;
  }

  function validCandidate(bytes32 candidate) view public returns (bool) {
    for(uint i = 0; i < candidateList.length; i++) {
      if (candidateList[i] == candidate) {
        return true;
      }
    }
    return false;
  }
}

