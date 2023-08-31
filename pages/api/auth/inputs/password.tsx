import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'

export const PasswordInput = () => {

    return (
        <FormControl>
            <FormLabel>Senha</FormLabel>
            <Input type='password' border={'1px solid gray'} />
            <FormHelperText>Sua senha está segura aqui.</FormHelperText>
        </FormControl>
    )
}