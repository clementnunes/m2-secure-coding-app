import {FastifyRequest} from "fastify";
import {SetPasswordDTO} from "../entities/dto/SetPasswordDTO";
import {User} from "../entities/user";
import {UserService} from "../services/user-service";
import {Repository} from "typeorm";

export class UserController implements IController {
    private readonly userService: UserService;

    constructor(userRepository: Repository<User>) {
        this.userService = UserService.getInstance(userRepository)
    }

    get(id: string) {
        return this.userService.findById(id);
    }

    getCollection()
    {
        return this.userService.findAll();
    }

    async post(request: FastifyRequest)
    {
        console.log("UserController:Post")
        console.log(request);

        const pwd = new SetPasswordDTO("tTest123453345554.", "tTest123453345554.");

        const user : User = await this.userService.add(
            "First Name1",
            "Last Name",
            "test@test.test",
            pwd
        )

        await this.userService.persist(user);
    }
}