import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { Card, Grid, Transition } from 'semantic-ui-react'

function UserData(){
    const { loading, data } = useQuery(FETCH_USER_DATA)
    return(
        <Grid>
            <Grid.Row>
                {
                    loading ? (
                        <h1>Loading Data</h1>
                    ) : (
                        <Transition.Group>
                            {
                                data.getSurvey.length > 0 && data.getSurvey.map(survey => (
                                    <Grid.Row width={14} key={survey.id} style={{marginBottom: 20, marginRight: 20, marginTop: 10}}>
                                        <Card>
                                        <Card.Content>
                                            <Card.Header>{survey.name}</Card.Header>
                                            <Card.Description>
                                                Phone: {survey.phone} <br />
                                                College: {survey.college} <br />
                                                Codechef_id: {survey.codechef_id} <br />
                                                Whatsapp: {survey.whatsapp} <br />
                                                Branch: {survey.branch} <br />
                                                Semester: {survey.semester} <br />
                                                Email: {survey.email} <br />
                                            </Card.Description>
                                        </Card.Content>
                                        </Card>
                                    </Grid.Row>
                                ))
                            }
                        </Transition.Group>
                    )
                }
            </Grid.Row>
        </Grid>
    )
}

const FETCH_USER_DATA = gql`
query getSurvey{
        getSurvey{
            id
            name
            phone
            college
            codechef_id
            whatsapp
            branch
            semester
            email
        }
    }
`

export default UserData