

describe("Sections test", () => {
    const userInfo = {
        userName: "jodibom301@keshitv.com",
        password: "shivamkumawat",
        hashTeg: "https://www.instagram.com/explore/locations/213149506/sharjah?igshid=MDJmNzVkMjY=",
    }
    beforeEach(() => {
        cy.visit("www.instagram.com");
    });
    it("Select topic - when clicked should switch the content of the clicked task and also open the accordion with the questions/sub-items in it", () => {
        cy.get(':nth-child(1) > .x1i10hfl > ._acan').click().wait(5000)
        cy.get(':nth-child(1) > .x1npaq5j > ._aa48 > ._aa4b').click().type(userInfo.userName)
        cy.get(':nth-child(2) > .x1npaq5j > ._aa48 > ._aa4b').click().type(userInfo.password)
        cy.get('._acan > ._ab8w').click().wait(5000)
        cy.visit(userInfo.hashTeg);
        // cy.get(':nth-child(1) > :nth-child(1) > a > .eLAPa > ._9AhH0').click().wait(1000)
        let nodeOne = 1
        let nodeTwo = 1
        cy.get('._9AhH0').each(() => {
            cy.get(`:nth-child(${nodeOne}) > :nth-child(${nodeTwo}) > a > .eLAPa > ._9AhH0`).last().click()
            cy.get('[data-testid="post-comment-text-area"]').type("@comp_tech_edu {enter}").wait(4000)
            cy.get('.NOTWr > .wpO6b').click()
            if(nodeTwo === 3){
                nodeTwo = 1
                nodeOne++   
            }  
            nodeTwo++ 
        })
    })
})