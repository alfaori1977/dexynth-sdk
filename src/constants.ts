import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  BSCTESTNET = 97,
  OPBNBTESTNET = 5611,
  TENTESTNET = 443,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = {
  [ChainId.MAINNET]: '0x5C28c151C27C02ae7fFfB8c4e47b3557c3A40344',
  [ChainId.BSCTESTNET]: '0x5C28c151C27C02ae7fFfB8c4e47b3557c3A40344',
  [ChainId.OPBNBTESTNET]: '0x2d74eb2B32747c95F2B9E0C1719Feb88281C503f',
  [ChainId.TENTESTNET]: '0x1293087c23feE1eFf9d1Ef1009eDb756c854B216',

}



export const INIT_CODE_HASH = {
  [ChainId.MAINNET]: '0x39519fdbd5f9753025d9b44efab7d229f988c7028e51be6f726d0438a9652cc5',
  [ChainId.BSCTESTNET]: '0x39519fdbd5f9753025d9b44efab7d229f988c7028e51be6f726d0438a9652cc5',
  [ChainId.OPBNBTESTNET]: '0x464c36bc74add83b1ccac6751315b2574aa35d8de0b7c8c079247bbdcecf00af',
  [ChainId.TENTESTNET]: '',
}


export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
