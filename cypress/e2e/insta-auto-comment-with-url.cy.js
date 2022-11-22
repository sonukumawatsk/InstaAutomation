

describe("Sections test", () => {
    const userInfo = {
        userName: "jodibom301@keshitv.com",
        password: "shivamkumawat",
        hashTeg: "https://www.instagram.com/explore/locations/213149506/sharjah?igshid=MDJmNzVkMjY=",
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
        cy.get('.KL4Bh').each(() => {
            cy.get(`:nth-child(4) > [style="flex-direction: column; padding-bottom: 0px; padding-top: 0px;"] > :nth-child(${nodeOne}) > :nth-child(${nodeTwo}) > a > .eLAPa > ._9AhH0`).click().wait(3000)
            cy.scrollTo("bottom")
            cy.get('[data-testid="post-comment-text-area"]').click()
            cy.get('textarea[aria-label="Add a comment…"]').type("@uae__community")
            cy.get('[data-testid="post-comment-input-button"] > ._7UhW9').click()
            cy.get('.NOTWr > .wpO6b').click()
            if(nodeTwo === 3){
                nodeTwo = 1
                nodeOne++   
            }  
            nodeTwo++ 
        })
    })
})