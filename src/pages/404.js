import React from "react"
import Layout from "../layout/layout"
import { ContainerMob, Heading } from "../utils/utils"

const Page404 = () => {
  return (
    <Layout>
      <ContainerMob>
        <Heading>
          <h1>404</h1>
          <h6>
            <span>Niestety szukana strona nie istnieje</span>
          </h6>
        </Heading>
      </ContainerMob>
    </Layout>
  )
}
export default Page404
