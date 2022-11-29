

describe("Sections test", () => {
    const userInfo = {
        userName: "jodibom301@keshitv.com",
        password: "shivamkumawat",
        hashTeg: "#reactjs",
    }
    beforeEach(() => {
        cy.visit("www.instagram.com");
        cy.get(':nth-child(1) > .x1i10hfl > ._acan').click().wait(5000)
        cy.get(':nth-child(1) > .x1npaq5j > ._aa48 > ._aa4b').click().type(userInfo.userName)
        cy.get(':nth-child(2) > .x1npaq5j > ._aa48 > ._aa4b').click().type(userInfo.password)
        cy.get('._acan > ._ab8w').click()
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
            cy.get('.x1i0vuye').click()
            cy.get("._ae2s").invoke("text").then((text) => {
                if(text.includes("Comments on this post have been limited.")) {
                    cy.get('.x160vmok > .x1i10hfl').click()        
                } else {
                    cy.get('.x1i0vuye').type("learn new things with @comp_tech_edu {enter}").wait(2000)
                    cy.get('.x160vmok > .x1i10hfl').click()        
                }
            })
            // cy.get('.x1i0vuye').type("@comp_tech_edu {enter}").wait(2000)
            // cy.get('.x160vmok > .x1i10hfl').click()
            if(nodeTwo === 3){
                nodeTwo = 1
                nodeOne++   
            }  
            nodeTwo++ 
        })
    })
})