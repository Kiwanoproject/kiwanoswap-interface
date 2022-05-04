import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    56: '0x4eEC1Dc3a43d8F53A36d4A416fC30b1B6C287d13',
    97: '0x4eEC1Dc3a43d8F53A36d4A416fC30b1B6C287d13',
  }

  it(`get address for mainnet (chainId 56)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '56'
    const expected = address[56]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '97'
    const expected = address[97]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '31337'
    const expected = address[56]
    expect(getAddress(address)).toEqual(expected)
  })
})
