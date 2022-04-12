import { useState, useEffect } from 'react'
import { useWeb3React } from "@web3-react/core"
import { process } from '../next.config'
import { abi } from '../../back-end/artifacts/contracts/NERC20.sol/NERC20.json'
import { abi as uniSwapAbi } from '../../back-end/artifacts/contracts/DeFi_Exchanges/UniSwapSingleSwap.sol/UniSwapSingleSwap.json'
import { ethers } from "ethers"
import { InjectedConnector } from "@web3-react/injected-connector"
import { Button, Divider, Row, Col, Anchor } from 'antd'
import { BigNumber } from "bignumber.js"
import { WETH, ERC20ABI, DAI } from '../../back-end/EVMAddresses/evmAddresses'

export const injected = new InjectedConnector()

export default function Home() {
  const [hasMetamask, setHasMetamask] = useState(false)
  const { Link } = Anchor
  const [targetOffset, setTargetOffset] = useState(undefined);
  const [decimalValue, setDecimalValue] = useState()
  const [totalSupply, setTotalSupply] = useState()
  const [newSupplyAmount, setSupplyAmount] = useState()
  const [tradeAmount, setTradeAmount] = useState()

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
      const contractAddress = process.env.ContractAddress
      const contract = new ethers.Contract(contractAddress, abi, signer)
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
      const contractAddress = process.env.ContractAddress
      const contract = new ethers.Contract(contractAddress, abi, signer)
      try {
        let value = await contract.totalSupply()
        value = (value == '0') ? value : BigNumber(value.toString()).shiftedBy(-18)
        console.log(value)
        setTotalSupply(value.toString())
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
      const contractAddress = process.env.ContractAddress
      const contract = new ethers.Contract(contractAddress, abi, signer)
      const DAIContract = new ethers.Contract(DAI, ERC20ABI, signer)
      try {
        let decimalShiftAmount = BigNumber(amount).shiftedBy(18).toString()
        await DAIContract.approve(contractAddress, decimalShiftAmount)
        await contract.supplyTokens(decimalShiftAmount)
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
      const contractAddress = process.env.ContractAddress
      const contract = new ethers.Contract(contractAddress, abi, signer)
      const WETHContract = new ethers.Contract(WETH, ERC20ABI, signer)
      const UniSwapContract = new ethers.Contract(process.env.UniSwapDeployedContract, uniSwapAbi, signer)
      try {
        if (amount >= 0) {
          let decimalShiftAmount = BigNumber(amount).shiftedBy(18).toString()
          await WETHContract.deposit({ value: decimalShiftAmount })
          await WETHContract.approve(process.env.UniSwapDeployedContract, decimalShiftAmount)
          await UniSwapContract.swapExactInputSingle(decimalShiftAmount, 0, WETH, DAI, 500)
        } else {
          alert('Not a valid number')
        }
        //await contract.supplyTokens(BigNumber(1).shiftedBy(18).toString())
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }
  return (
    <>
      <Row>
        <Col span={7}></Col>
        <Col span={4}>
          <Anchor affix={true} targetOffset={targetOffset}>
            <Link href="#read-functions" title="Read Functions" />
            <Link href="#write-functions" title="Write Functions" />
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
      </Row>
      <Divider plain id='read-functions'>Read Functions</Divider>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => getDecimals()}>View Decimals</Button>
        </Col>
        <Col>
          <p>Value: {decimalValue}</p>
        </Col>
      </Row>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => getTotalSupply()}>View Total Supply</Button>
        </Col>
        <Col>
          <p>Value: {totalSupply}</p>
        </Col>
      </Row>
      <Divider plain id='write-functions'>Write Functions</Divider>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => tradeEthForDai(tradeAmount)}>Trade ETH for DAI</Button>
        </Col>
        <Col>
          <input style={{ marginLeft: 24 }} onChange={(e) => setTradeAmount(e.target.value)}></input>
        </Col>
      </Row>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => supplyTokens(newSupplyAmount)}>Supply Tokens</Button>
        </Col>
        <Col>
          <input style={{ marginLeft: 24 }} onChange={(e) => setSupplyAmount(e.target.value)}></input>
        </Col>
      </Row>
    </>
  )
}