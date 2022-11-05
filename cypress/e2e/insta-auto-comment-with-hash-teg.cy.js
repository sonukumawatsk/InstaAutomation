

describe("Sections test", () => {
    const userInfo = {
        userName: "jodibom301@keshitv.com",
        password: "shivamkumawat",
        hashTeg: "#comptechedu",
    }
    beforeEach(() => {
        cy.visit("www.instagram.com");
        cy.get(':nth-child(1) > .x1i10hfl > ._acan').click().wait(5000)
        cy.get(":nth-child(1) > ._aa5k > ._aa48 > ._aa4b").click().type(userInfo.userName)
        cy.get(':nth-child(2) > ._aa5k > ._aa48 > ._aa4b').click().type(userInfo.password)
        cy.get('._abc2 > :nth-child(3)').click()
    });
    it("Select topic - when clicked should switch the content of the clicked task and also open the accordion with the questions/sub-items in it", () => {
        const message = ["nice", "good work", "nice post", "good work"]
        cy.get(':nth-child(2) > .x1n2onr6 > .x1i10hfl > .x1z11no5').click()
        cy.get('._aauy').click().type(`${userInfo.hashTeg} {enter}`)
        cy.get('._ab97').first().click().wait(5000)
        let nodeOne = 1
        let nodeTwo = 1
        cy.get('._aagw').each(() => {
            cy.get(`:nth-child(3) > [style="position: relative; display: flex; flex-direction: column; padding-bottom: 0px; padding-top: 0px;"] > :nth-child(${nodeOne}) > :nth-child(${nodeTwo}) > .x1i10hfl > ._aagu > ._aagw`).click()
            cy.get('.x160vmok > .x1i10hfl').click()
            if(nodeTwo === 3){
                nodeTwo = 1
                nodeOne++   
            }  
            nodeTwo++ 
        })
    })
})