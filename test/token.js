const token = artifacts.require("Token")



contract("description pour les tests",(accounts) => {

    beforeEach(async() => {
        ourToken = await token.new(10000,{from:accounts[0]})
    })

    it("token name and symb",async() => {
        const name = await ourToken.name.call()
        const symb = await ourToken.symbol.call()

        expect(name).to.be.equal("leprogrammeurmarocain")
        expect(symb).to.be.equal("lprm")
    })

    
    it("token name and symb",async() => {
        const balance = await ourToken.balanceOf.call(accounts[0])

        expect(balance.toNumber()).to.be.equal(10000)
    })

     
})