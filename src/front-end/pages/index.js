import { useState, useEffect } from 'react'
import { useWeb3React } from "@web3-react/core"
import { process } from '../next.config'
import { abi } from '../../back-end/artifacts/contracts/NERC20.sol/NERC20.json'
import { ethers } from "ethers"
import { InjectedConnector } from "@web3-react/injected-connector"
import { Button, Divider, Row, Col, Anchor } from 'antd'

export const injected = new InjectedConnector()

export default function Home() {
  const [hasMetamask, setHasMetamask] = useState(false)
  const { Link } = Anchor
  const [targetOffset, setTargetOffset] = useState(undefined);
  const [decimalValue, setDecimalValue] = useState()
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
        console.log(value)
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }
  let borrowTokens = async (amount) => {

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
          <p>{decimalValue}</p>
        </Col>
      </Row>
      <Divider plain id='write-functions'>Write Functions</Divider>
      <Row>
        <Col span={10}></Col>
        <Col span={2}>
          <Button type="secondary" onClick={() => borrowTokens()}>Borrow Tokens</Button>
        </Col>
        <Col>
          <input style={{ marginLeft: 24 }}></input>
        </Col>
      </Row>
    </>
  )
}