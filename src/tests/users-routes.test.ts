import { server } from "../lib/fastify"
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import {expect} from 'chai';
import {Done} from "mocha";
import {Response} from "light-my-request";
import {User} from "../entities/user";
import {DbConn} from "../dbConn";
import {UserService} from "../services/user-service";
import {SetPasswordDTO} from "../entities/dto/SetPasswordDTO";

chai.use(chaiAsPromised)

describe('/users', function () {
    const dbConn = DbConn.getInstance();
    const userRepo = dbConn.appDataSource.getRepository(User)
    const userService = UserService.getInstance(userRepo);

    let user: null|User = null;

    before(async () => {
        await userRepo.clear()

        user = await userService.addAndPersist(
            "Init",
            "Init",
            "init@init.init",
            new SetPasswordDTO("Test12345664234.", "Test12345664234.")
        )
    })

    /*describe('POST #create', function () {
        it('should register the user', async function (done: Done) {
            const response = await server.inject({
                    url: `/users`,
                    method: 'POST',
                    payload: {
                        "email": "email@test.tester",
                        "password": "Test12345664234.",
                        "confirmPassword": "Test12345664234.",
                        "firstName": "Test",
                        "lastName": "Test"
                } });

            expect(response.statusCode).to.equal(200);
            done();
        })
    })
    */
    describe('GET', function () {

        it('tests',  (done: Done) => {
            server.inject({
                method: 'GET',
                url: '/tests'
            }).then((response: Response) => {
                console.log(response)
                expect(response.statusCode).to.equal(200)
            }).then(done, done);
        })
        /*it('should fetch one user',  async (done : Done) => {
            if(!user)
                return;

            const response = await server.inject({
                method: 'GET',
                url: `/users/${user.id}`
            })

            console.log(response)

            expect(response.statusCode).to.equal(200);
            done();
        })*/

        it('should fetch all users',  (done: Done) => {
            server.inject({
                method: 'GET',
                url: '/users'
            }).then((response: Response) => {
                console.log(response)
                expect(response.statusCode).to.equal(200)
                done();
            }).catch((err) => {
                done(err);
            })
        })
    })
})