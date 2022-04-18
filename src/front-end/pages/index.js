import React, { useState, useEffect } from 'react'
import { useWeb3React } from "@web3-react/core"
import { EVMAddresses } from '../next.config'
import { abi } from '../../back-end/artifacts/contracts/NERC20.sol/NERC20.json'
import { abi as uniSwapAbi } from '../../back-end/artifacts/contracts/DeFi_Exchanges/UniSwapSingleSwap.sol/UniSwapSingleSwap.json'
import { ethers } from "ethers"
import { InjectedConnector } from "@web3-react/injected-connector"
import { Button, Divider, Row, Col, Anchor, Form, Input } from 'antd'
import { BigNumber } from "bignumber.js"
const { WETH, ERC20ABI, DAI, NFTLoanAddress, UniSwapSingleSwapAddress } = EVMAddresses


export const injected = new InjectedConnector({ supportedChainIds: [31337, 80001] })

export default function Home() {
  const [hasMetamask, setHasMetamask] = useState(false)
  const { Link } = Anchor
  const [targetOffset, setTargetOffset] = useState(undefined);

  // Overal contract state read function 
  const [decimalValue, setDecimalValue] = useState()
  const [totalSupply, setTotalSupply] = useState()
  const [totalInterest, setTotalInterest] = useState()
  const [totalBorrowAmount, setTotalBorrowAmount] = useState()
  const [totalBorrowedInterest, setTotalBorrowInterest] = useState()

  // Investment section state variables
  const [userSupply, setUserSupply] = useState()
  const [userInterestEarned, setInterestEarned] = useState()

  // Borrow section state variables
  const [userAmountBorrowed, setUserAmountBorrowed] = useState()
  const [userBorrowedInterest, setBorrowedInterest] = useState()
  const [userBorrowRepayAmount, setBorrowRepayAmount] = useState()


  let tradeEthForDaiInput = React.createRef()
  let supplyTokensInput = React.createRef()
  let withdrawTokensInput = React.createRef()

  const [form] = Form.useForm();

  useEffect(() => {
    setTargetOffset(window.innerHeight / 2)
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true)
    }
  })

  const {
    active,
    activate,
    chainId,
    account,
    library: provider,
  } = useWeb3React()

  let connect = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await activate(injected)
        setHasMetamask(true)
      } catch (e) {
        console.log(e)
      }
    }
  }

  let getDecimals = async () => {
    if (active) {
      const signer = provider.getSigner()
      const contract = new ethers.Contract(NFTLoanAddress, abi, signer)
      try {
        let value = await contract.decimals()
        setDecimalValue(value)
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }

  let getTotalSupply = async () => {
    if (active) {
      const signer = provider.getSigner()
      const contract = new ethers.Contract(NFTLoanAddress, abi, signer)
      try {
        let value = await contract.totalSupply()
        value = (value == '0') ? value : BigNumber(value.toString()).shiftedBy(-18)
        setTotalSupply(value.toString())
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }

  let getTotalInterest = async () => {
    if (active) {
      const signer = provider.getSigner()
      const contract = new ethers.Contract(NFTLoanAddress, abi, signer)
      try {
        let value = await contract.totalAmountInvestedInterest()
        value = (value == '0') ? '0' : BigNumber(value.toString()).shiftedBy(-18).toFixed(18)
        setTotalInterest(value)
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }

  let getTotalBorrowAmount = async () => {
    if (active) {
      const signer = provider.getSigner()
      const contract = new ethers.Contract(NFTLoanAddress, abi, signer)
      try {
        let value = await contract.totalAmountBorrowed()
        value = (value == '0') ? value : BigNumber(value.toString()).shiftedBy(-18)
        setTotalBorrowAmount(value.toString())
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }

  let getTotalBorrowInterest = async () => {
    if (active) {
      const signer = provider.getSigner()
      const contract = new ethers.Contract(NFTLoanAddress, abi, signer)
      try {
        let value = await contract.totalBorrowedInterest()
        value = (value == '0') ? value : BigNumber(value.toString()).shiftedBy(-18)
        setTotalBorrowInterest(value.toString())
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }

  let getUserSuppliedToken = async () => {
    if (active) {
      const signer = provider.getSigner()
      const contract = new ethers.Contract(NFTLoanAddress, abi, signer)
      try {
        let value = await contract.getAmountInvested()
        value = (value == '0') ? value : BigNumber(value.toString()).shiftedBy(-18)
        setUserSupply(value.toString())
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }

  let getUserInterestEarned = async () => {
    if (active) {
      const signer = provider.getSigner()
      const contract = new ethers.Contract(NFTLoanAddress, abi, signer)
      try {
        let value = BigNumber((await contract.viewAccruedTokensAmount()).toString())
        setInterestEarned((value == 0) ? 0 : value.shiftedBy(-18).toFixed(18))
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }

  let claimAccruedTokens = async () => {
    if (active) {
      const signer = provider.getSigner()
      const contract = new ethers.Contract(NFTLoanAddress, abi, signer)
      try {
        await contract.claimAccruedTokens()
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }

  let supplyTokens = async (amount) => {
    if (active) {
      const signer = provider.getSigner()
      const DAIContract = new ethers.Contract(DAI, ERC20ABI, signer)
      const contract = new ethers.Contract(NFTLoanAddress, abi, signer)
      try {
        if (amount > 0) {
          let decimalShiftAmount = BigNumber(amount).shiftedBy(18).toString()
          await DAIContract.approve(NFTLoanAddress, decimalShiftAmount)
          await contract.supplyTokens(decimalShiftAmount)
        } else {
          alert('Not a valid number')
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }
  let withdrawTokens = async (amount) => {
    if (active) {
      const signer = provider.getSigner()
      const contract = new ethers.Contract(NFTLoanAddress, abi, signer)
      try {
        if (amount > 0) {
          let decimalShiftAmount = BigNumber(amount).shiftedBy(18).toString()
          await contract.withdrawTokens(decimalShiftAmount)
        } else {
          alert('Not a valid number')
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }
  let tradeEthForDai = async (amount) => {
    if (active) {
      const signer = provider.getSigner()
      const WETHContract = new ethers.Contract(WETH, ERC20ABI, signer)
      const UniSwapContract = new ethers.Contract(UniSwapSingleSwapAddress, uniSwapAbi, signer)
      try {
        if (amount > 0) {
          let decimalShiftAmount = BigNumber(amount).shiftedBy(18).toString()
          await WETHContract.deposit({ value: decimalShiftAmount })
          await WETHContract.approve(UniSwapSingleSwapAddress, decimalShiftAmount)
          await UniSwapContract.swapExactInputSingle(decimalShiftAmount, 0, WETH, DAI, 3000)
        } else {
          alert('Not a valid number')
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }

  let borrowDai = async ({ borrowAmount, nftAddress, tokenId }) => {
    if (active) {
      const signer = provider.getSigner()
      const contract = new ethers.Contract(NFTLoanAddress, abi, signer)
      try {
        console.log(borrowAmount)
        if (borrowAmount > 0 && tokenId >= 0) {
          let decimalShiftAmount = BigNumber(borrowAmount.toString()).shiftedBy(18).toString()
          console.log(account, decimalShiftAmount, '4', nftAddress, tokenId)
          //await contract.borrowTokens(account, decimalShiftAmount, '4', nftAddress, tokenId)
        } else {
          alert('Not a valid number')
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }

  let getUserAmountBorrowed = async () => {
    if (active) {
      const signer = provider.getSigner()
      const contract = new ethers.Contract(NFTLoanAddress, abi, signer)
      try {
        let value = BigNumber((await contract.getAmountBorrowed(account)).toString())
        setUserAmountBorrowed((value == 0) ? 0 : value.shiftedBy(-18).toFixed(18))
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }

  let getUserBorrowedInterest = async () => {
    if (active) {
      const signer = provider.getSigner()
      const contract = new ethers.Contract(NFTLoanAddress, abi, signer)
      try {
        let value = BigNumber((await contract.viewBorrowAccruedTokensAmount(account)).toString())
        setBorrowedInterest((value == 0) ? 0 : value.shiftedBy(-18).toFixed(18))
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }

  let getUserBorrowRepayAmount = async () => {
    if (active) {
      const signer = provider.getSigner()
      const contract = new ethers.Contract(NFTLoanAddress, abi, signer)
      try {
        let value = BigNumber((await contract.getBorrowedRepayAmount(account)).toString())
        setBorrowRepayAmount((value == 0) ? 0 : value.shiftedBy(-18).toFixed(18))
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }

  const formItemLayout =
  {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 20,
    },
  }
  const buttonItemLayout =
  {
    wrapperCol: {
      span: 14,
      offset: 10,
    },
  }

  return (
    <>
      <Row>
        <Col span={5}></Col>
        <Col span={4}>
          <Anchor affix={true} targetOffset={targetOffset}>
            <Link href="#read-functions" title="Contract State Read Functions" />
            <Link href="#investment-functions" title="Investment Functions" />
            <Link href="#mint-nft-functions" title="Mint NFT Functions" />
            <Link href="#borrow-functions" title="Borrow Functions" />
          </Anchor>
        </Col>
        <Col>
          {hasMetamask ? (
            active ? (
              <Button type="primary" style={{ margin: 16 }}>Connected!</Button>
            ) : (
              <Button type="primary" style={{ margin: 16 }} onClick={() => connect()}>Connect Wallet</Button>
            )
          ) : (
            "Please install metamask"
          )}
        </Col>
        <Col span={1}></Col>
        <Col span={4}>
          <h1 style={{ margin: 8, color: "grey" }}>NFT Loan Platform</h1>
        </Col>
      </Row>
      <Row>
        <Col span={7}></Col>
        <Col span={12}><span>NFT Loan Contract on Mumbai is located at address </span><a href="https://mumbai.polygonscan.com/address/0x7B427D442d5cCe45b9e6FB984206605B3c97f64D#code" target="_blank">0x7B427D442d5cCe45b9e6FB984206605B3c97f64D</a><span> - GitHub </span><a href="https://github.com/zack53/nftys-defi" target="_blank">Location</a></Col>
      </Row>
      <Row>
        <Col span={7}></Col>
        <Col span={12}><span>NFT Mint Contract on Mumbai is located at address </span><a href="https://mumbai.polygonscan.com/address/0xae87e56a9dF1Baf99F77B7A75F6EFDFD03bc41e5#code" target="_blank">0xae87e56a9dF1Baf99F77B7A75F6EFDFD03bc41e5</a><span> - GitHub </span><a href="https://github.com/zack53/nft-from-scratch" target="_blank">Location</a></Col>
      </Row>
      <Divider plain id='read-functions'>Contract State Read Functions</Divider>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => getDecimals()} style={{ float: "right" }}>View Decimals</Button>
        </Col>
        <Col style={{ marginLeft: 20, marginTop: 5 }}>
          <p>Value: {decimalValue}</p>
        </Col>
      </Row>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => getTotalSupply()} style={{ float: "right" }}>View Total Supply</Button>
        </Col>
        <Col style={{ marginLeft: 20, marginTop: 5 }}>
          <p>Value: {totalSupply}</p>
        </Col>
      </Row>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => getTotalInterest()} style={{ float: "right" }}>Total Earned Interest</Button>
        </Col>
        <Col style={{ marginLeft: 20, marginTop: 5 }}>
          <p>Value: {totalInterest}</p>
        </Col>
      </Row>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => getTotalBorrowAmount()} style={{ float: "right" }}>Total Borrowed</Button>
        </Col>
        <Col style={{ marginLeft: 20, marginTop: 5 }}>
          <p>Value: {totalBorrowAmount}</p>
        </Col>
      </Row>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => getTotalBorrowInterest()} style={{ float: "right" }}>Total Borrowed Interest</Button>
        </Col>
        <Col style={{ marginLeft: 20, marginTop: 5 }}>
          <p>Value: {totalBorrowedInterest}</p>
        </Col>
      </Row>
      <Divider plain id='investment-functions'>Investment Functions</Divider>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => getUserSuppliedToken()} style={{ float: "right" }}>View Amount Invested</Button>
        </Col>
        <Col style={{ marginLeft: 20, marginTop: 5 }}>
          <p>Value: {userSupply}</p>
        </Col>
      </Row>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => getUserInterestEarned()} style={{ float: "right" }}>View Interest Earned</Button>
        </Col>
        <Col style={{ marginLeft: 20, marginTop: 5 }}>
          <p>Value: {userInterestEarned}</p>
        </Col>
      </Row>
      <Row>
        <Col span={11}></Col>
        <Col span={2}>
          <Button type="primary" style={{ marginBottom: 8, float: "right" }} onClick={() => claimAccruedTokens()} >Claim Accrued Tokens</Button>
        </Col>
      </Row>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => tradeEthForDai(tradeEthForDaiInput.current.value)} style={{ float: "right" }}>Trade MATIC for DAI</Button>
        </Col>
        <Col>
          <input style={{ marginLeft: 24, marginBottom: 5, marginTop: 5 }} ref={tradeEthForDaiInput} placeholder="0"></input>
        </Col>
      </Row>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => supplyTokens(supplyTokensInput.current.value)} style={{ float: "right" }}>Supply Tokens</Button>
        </Col>
        <Col>
          <input style={{ marginLeft: 24, marginBottom: 5, marginTop: 5 }} ref={supplyTokensInput} placeholder="0"></input>
        </Col>
      </Row>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => withdrawTokens(withdrawTokensInput.current.value)} style={{ float: "right" }}>Withdraw Tokens</Button>
        </Col>
        <Col>
          <input style={{ marginLeft: 24, marginBottom: 5, marginTop: 5 }} ref={withdrawTokensInput} placeholder="0"></input>
        </Col>
      </Row>
      <Divider plain id="mint-nft-functions">Mint NFT Functions</Divider>
      <Row>
        <Col span={10}></Col>
        <Col>
          <span>Mint NFT to be able to provide collateral for loan process.</span>
        </Col>
      </Row>
      <Divider plain id="borrow-functions">Borrow Functions</Divider>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => getUserAmountBorrowed()} style={{ float: "right" }}>View Amount Borrowed</Button>
        </Col>
        <Col style={{ marginLeft: 20, marginTop: 5 }}>
          <p>Value: {userAmountBorrowed}</p>
        </Col>
      </Row>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => getUserBorrowedInterest()} style={{ float: "right" }}>View Borrowed Interest</Button>
        </Col>
        <Col style={{ marginLeft: 20, marginTop: 5 }}>
          <p>Value: {userBorrowedInterest}</p>
        </Col>
      </Row>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => getUserBorrowRepayAmount()} style={{ float: "right" }}>View Repayment Amount</Button>
        </Col>
        <Col style={{ marginLeft: 20, marginTop: 5 }}>
          <p>Value: {userBorrowRepayAmount}</p>
        </Col>
      </Row>
      <Row>
        <Col span={9}></Col>
        <Col span={6}>
          <Form
            {...formItemLayout}
            layout='horizontal'
            form={form}
            style={{ marginTop: 10 }}
            name="borrowForm"
            onFinish={borrowDai}
            initialValues={{ remember: true }}
          >
            <Form.Item label="Borrow Amount" name="borrowAmount" rules={[{ required: true, message: 'Please input borrow amount' }]}>
              <Input placeholder="0" />
            </Form.Item>
            <Form.Item label="NFT Address" name="nftAddress" rules={[{ required: true, message: 'Please input NFT address' }]} initialValue="0xae87e56a9dF1Baf99F77B7A75F6EFDFD03bc41e5">
              <Input defaultValue="0xae87e56a9dF1Baf99F77B7A75F6EFDFD03bc41e5" />
            </Form.Item>
            <Form.Item label="Token Id" name="tokenId" rules={[{ required: true, message: 'Please input token id' }]}>
              <Input placeholder="0" />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <Button type="primary" htmlType='submit'>Borrow DAI</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}