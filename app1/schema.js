import { buildSchema } from 'graphql';

const schema = buildSchema(`
    
    type Course {
        id: ID,
        courseName: String
        category: String
        price: Int
        laguage: String
        email: String
        stack: Stack
        teachingAssists: [TeachingAssist]
    }
    type TeachingAssist{
        firstName: String
        lastName: String
        experience: Int
    }
    enum Stack{
        WEB
        MOBILE
        OTHER
    }
    

    type Query{
        getCourse(id: ID): Course
    }
    input CourseInput{
        id: ID,
        courseName: String!
        category: String
        price: Int!
        laguage: String
        email: String
        stack: Stack
        teachingAssists: [TeachingAssistInput]!
    }
    input TeachingAssistInput{
        firstName: String
        lastName: String
        experience: Int
    }

    type Mutation{
        createCourse(input: CourseInput): Course
    }

`)

export default schema;

//responsebale for getting some data : type Query

//responsebale for setting some data : mutation type

//when ever we get a querry the query resolved by resolver( accepting querry and returning a response accrording to logic)
//!: this is compulsory field
//Mutation: means a u want to change data it usually goes through with the mutation