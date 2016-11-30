// TODO: val: Current Block ID
// TODO: val: Current Block Length
// TODO: val: Consensus Limit
// TODO: val: BlockChain Refresh Count

// TODO: func: collect blocks from nodes, organize into an array of arrays based on block ID
// TODO: func: when an id array length equals the minimum amount of Consensus based on Consensus Limit value, continue to next validation
// TODO: func: create validation to check received blocks prior block ID (matching current block id) and prior block length (matching current block length), if both match, then add to current block chain
// TODO: func: if new block passes, update values for current ID on block chain and block length on block chain after block is inserted into data base
// TODO: func: if new block failes, drop existing blockchain database and proceed to rebuild delegate function to build block chain
