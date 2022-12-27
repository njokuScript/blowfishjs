import Blowfish from '../src/index'
require('dotenv').config()

describe('Blowfish', () => {
  const blowfish = new Blowfish(process.env.BLOWFISH_API_KEY)

  it('should scan a transaction', () => {
    const tx_data = {
      chainId: 101,
      chain: 'solana',
      transactions: [
        'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAIFRcely+GNw4HsXvDZ2vi8ZHSvnfYAbuGTK5XjxGyUJ60JrJ+YHtCWDBeA0FSzvcigxpHxRg4haKu4qFquf9nwtxDLqeLGT1Y9D3jvRn8BJWyEq8LHFGZpD+vfskCcD4EGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGp9UXGSxWjuCKhF9z0peIzwNcMUWyGrNE2AYuqUAAAD1D6qTjIhI3IvLaoY+jcKrCp7I8+Di2XK6tV2y4c2liAgMDAgQABAQAAAADAgABDAIAAAAA4fUFAAAAAA==',
      ],
      userAccount: '5hPhdbH8bVXNrx2Cy9bM6bXkZhNUGAUizq9QQW7zMguz',
      metadata: {
        dappUrl: 'https://scammer.com',
      },
    }

    const res = await blowfish.scanTransaction(tx_data)
    console.log(res)
  })
})
