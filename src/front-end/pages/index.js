import { useState, useEffect } from 'react'
import { useWeb3React } from "@web3-react/core"
import { process } from '../next.config'
import { abi } from '../../back-end/artifacts/contracts/NERC20.sol/NERC20.json'
import { ethers } from "ethers"
import { InjectedConnector } from "@web3-react/injected-connector"
import { Button } from 'antd'
//import '../styles/App.css'

export const injected = new InjectedConnector()

export default function Home() {
  const [hasMetamask, setHasMetamask] = useState(false)

  useEffect(() => {
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

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await activate(injected)
        setHasMetamask(true)
      } catch (e) {
        console.log(e)
      }
    }
  }

  async function execute() {
    if (active) {
      const signer = provider.getSigner()
      const contractAddress = process.env.ContractAddress
      const contract = new ethers.Contract(contractAddress, abi, signer)
      try {
        await contract.store(42)
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }

  return (
    <div>
      {hasMetamask ? (
        active ? (
          <>
            <Button type="primary" style={{ margin: 8 }} onClick={() => execute()}>Execute</Button>
          </>
        ) : (
          <Button type="primary" style={{ margin: 8 }} onClick={() => connect()}>Connect</Button>
        )
      ) : (
        "Please install metamask"
      )}
    </div>
  )
}