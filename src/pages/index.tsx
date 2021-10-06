import { Flex, Button, Stack, Select, Text } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { Logo } from '../components/Logo/Logo';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório!').email('E-mail inválido!'),
  password: yup.string().required('Senha obrigatória!'),
})

export default function SignIn() {

  const { register, handleSubmit, formState, errors } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }

  return (
    <Flex w="100vw" h="100%" align="center" justify="center">
      <Flex as="form" w="100%" h="100%" maxWidth={360} bg="gray.800" padding="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
        <Stack spacing="8">
          <Logo />
          <Input type="name" name="name" label="Digite seu nome completo" error={errors.password} ref={register} />
          <Input type="tel" name="tel" label="Telefone/WhatsApp" error={errors.password} ref={register} />
          <Input type="email" name="email" label="Qual seu melhor e-mail?" error={errors.email} ref={register} />
          <Input type="text" name="text" label="Nome da sua empresa:" error={errors.password} ref={register} />
          <Input type="text" name="text" label="Site:" error={errors.password} ref={register} />
          <Input type="text" name="text" label="@ do instagram" error={errors.password} ref={register} />

          <Stack>
            <Text>Já fez anúncios na internet? Se sim, assinale as plataformas que já trabalhou:</Text>
            <Select placeholder="Selecione uma opção" label="">
              <option value="facebook">Facebook/Instagram</option>
              <option value="google">Google (pesquisa, display, youtube, shopping)</option>
              <option value="pinterest">Pinterest</option>
              <option value="outro">Outro</option>
            </Select>
          </Stack>

          <Stack>
            <Text>Quanto investiu em anúncios nos últimos 6 meses</Text>
            <Select placeholder="Selecione uma opção" label="">
              <option value="facebook">0 - 10k</option>
              <option value="google">10 - 50k</option>
              <option value="pinterest">50k ou mais</option>
            </Select>
          </Stack>

          <Input type="text" name="text" label="Quanto de retorno médio sobre o investimento em anúncios?" error={errors.password} ref={register} />

        </Stack>
        <Button type="submit" mt="6" colorScheme="blue" size="lg" height={30} isLoading={formState.isSubmitting} > Enviar </Button>
      </Flex>
    </Flex >
  )
}
