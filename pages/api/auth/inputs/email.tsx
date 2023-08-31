import { FormControl, FormLabel, Input } from '@chakra-ui/react'

export const EmailInput = () => {

    return (
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' border={'1px solid gray'} />
        </FormControl>
    )
}
