import {Repository} from "typeorm";
import {User} from "../entities/user";
import {SetPasswordDTO} from "../entities/dto/SetPasswordDTO";

export class UserService {
    static INSTANCE : null|UserService = null;
    private userRepository: Repository<User>;

    private constructor(userRepository: Repository<User>) {
        this.userRepository = userRepository
    }

    static getInstance(userRepository: Repository<User>)
    {
        if(null == UserService.INSTANCE)
            UserService.INSTANCE = new UserService(userRepository);

        return UserService.INSTANCE
    }

    async add(firstName: string, lastName: string, email: string, setPassword: SetPasswordDTO)
    {
        const user = new User();

        user.firstName = firstName
        user.lastName = lastName
        user.email = email

        await setPassword.validate();

        await user.setPassword(setPassword.getPassword(), setPassword.getPasswordConfirmation());

        return user
    }

    async persist(user: User)
    {
        await this.userRepository.save(user)
            .then(() => console.log("User has been added"))
            .catch((e: any) => { throw e })
    }

    async addAndPersist(firstName: string, lastName: string, email: string, setPassword: SetPasswordDTO)
    {
        const user = await this.add(firstName, lastName, email, setPassword)
        await this.persist(user)
        return user
    }

    async findAll()
    {
        return this.userRepository.createQueryBuilder("user").getMany();
    }

    findById(id: string)
    {
        return this.userRepository.createQueryBuilder("user").where("user.id = :id", { id: id})
    }

    count()
    {
        return this.userRepository.createQueryBuilder("user").getCount();
    }
}