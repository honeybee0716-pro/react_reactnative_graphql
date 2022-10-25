import {
  Box,
  Center,
  Hidden,
  Text,
  HStack,
  VStack,
  Pressable
} from 'native-base'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import { useState } from 'react'
import IconChevronDown from 'shared/components/icons/IconChevronDown'
import TNCLayout from '../../components/TNCLayout'

export default function TermsAndConditions() {
  const [listContent, setListContent] = useState([
    {
      text: 'Introduction'
    },
    {
      text: 'Accepting these terms'
    },
    {
      text: 'Change to these terms'
    },
    {
      text: 'Creating Accounts'
    },
    {
      text: 'Third Part Services'
    },
    {
      text: 'Governing Law'
    },
    {
      text: 'Jurisdiction'
    },
    {
      text: 'Termination'
    },
    {
      text: 'Questions & Contact Information'
    }
  ])

  return (
    <>
      <TNCLayout>
        <Box minH="full" flexDirection="row">
          <Box
            flex="1"
            paddingY={{ base: '4', sm: '8', lg: '12' }}
            paddingLeft={{ base: '4', sm: '8', lg: '20' }}
            paddingRight={{ base: '4', sm: '8', lg: '10' }}
          >
            <HStack marginBottom="7" alignItems="center">
              <Box flex="1">
                <KeyboardAwareScrollView
                  contentContainerStyle={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: theme.colors.shared.white
                  }}
                  overScrollMode="auto"
                  horizontal={true}
                >
                  <HStack space={{ base: '3', sm: '4' }}>
                    {listContent.map((content, i) => (
                      <Box
                        key={i}
                        paddingY="1"
                        paddingX="3"
                        borderWidth="1"
                        borderColor={theme.colors.shared.softGray}
                        borderRadius="full"
                        backgroundColor={theme.colors.shared.aliceBlue}
                      >
                        <Text fontSize="13px" fontWeight="medium">
                          {content.text}
                        </Text>
                      </Box>
                    ))}
                  </HStack>
                </KeyboardAwareScrollView>
              </Box>
              <HStack marginLeft="4">
                <Pressable
                  backgroundColor="white"
                  borderWidth="1"
                  borderColor={theme.colors.shared.softer3Gray}
                  borderLeftRadius="lg"
                  p="2"
                  _hover={{
                    backgroundColor: 'theme.colors.shared.softerGray'
                  }}
                >
                  <Box w="16px">
                    <IconChevronDown rotation={270} />
                  </Box>
                </Pressable>

                <Pressable
                  backgroundColor="white"
                  borderWidth="1"
                  borderColor={theme.colors.shared.softer3Gray}
                  borderRightRadius="lg"
                  p="2"
                  _hover={{
                    backgroundColor: 'theme.colors.shared.softerGray'
                  }}
                >
                  <Box w="16px">
                    <IconChevronDown rotation={90} />
                  </Box>
                </Pressable>
              </HStack>
            </HStack>
            <Box paddingRight={{ base: '0', lg: '10' }}>
              <Text
                fontSize={{ base: 'sm', sm: 'md', lg: 'xl' }}
                fontWeight="medium"
              >
                Contact Blaster
              </Text>
              <Text
                fontSize={{ base: '22px', sm: '2xl', lg: '40px' }}
                fontWeight="semibold"
              >
                Terms and Conditions
              </Text>
              <Text
                fontSize={{ base: 'xs', lg: 'sm' }}
                fontWeight="medium"
                marginTop="3"
              >
                Last Updated on : 05/03/2021
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop="5"
              >
                These terms of service ("Terms") apply to your access and use of
                Contact Blaster. Please read this Terms and Conditions agreement
                carefully before accessing or using Contact Blaster. Because it
                is such an important contract between us and our users, we have
                tried to make it as clear as possible
              </Text>
            </Box>
            <Hidden till="lg">
              <Box
                marginTop="6"
                borderBottomWidth="1"
                borderBottomColor={theme.colors.shared.softer2Gray}
              ></Box>
            </Hidden>
            <Box paddingRight={{ base: '0', lg: '10' }}>
              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop="5"
              >
                1. Accepting these terms
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                If you access or use the Service, it means you agree to be bound
                by all of the terms below. So, before you use the Service,
                please read all of the terms. If you don't agree to all of the
                terms below, please do not use the Service. Also, if a term does
                not make sense to you, please let us know by e-mailing&nbsp;
                <SolitoLink href={'mailto:info@saastemplate.io'}>
                  <Pressable
                    _hover={{
                      textDecoration: 'underline',
                      color: theme.colors.shared.blueLink
                    }}
                  >
                    <Text color={theme.colors.shared.blueLink}>
                      team@saastemplate.io
                    </Text>
                  </Pressable>
                </SolitoLink>
              </Text>
              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                2. Changes to these Terms
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                We reserve the right to modify these Terms at any time. For
                instance, we may need to change these Terms if we come out with
                a new feature or for some other reason.
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                Whenever we make changes to these Terms, the changes are
                effective Immediately after we post such revised Terms
                (indicated by revising the date at the top of these Terms) or
                upon your acceptance if we provide a mechanism for your
                immediate acceptance of the revised Terms (such as a
                click-through confirmation or acceptance button). It is your
                responsibility to check&nbsp;
                <SolitoLink href={'https://www.saastemplate.io'}>
                  <Pressable
                    _hover={{
                      textDecoration: 'underline',
                      color: theme.colors.shared.blueLink
                    }}
                  >
                    <Text color={theme.colors.shared.blueLink}>
                      www.saastemplate.io
                    </Text>
                  </Pressable>
                </SolitoLink>
                &nbsp;for changes to these Terms. Use of the Contact Blaster may
                be subject to additional terms and conditions presented by
                Contact Blaster.
              </Text>
              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                3. Change to these terms
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                Future Marketing Solutions reserves the right to add, delete, or
                modify any provision of these general Terms and Conditions at
                any time without notice. Failure to receive notification of a
                change does not make those changes invalid. These Terms and
                Conditions will always be available to download or print from
                our website. Any changes to a contract or agreement that has
                already been signed and approved, by Future Marketing Solutions
                and the Client, will require both parties’ acknowledgement and
                signatures before the changes can be amended and considered
                actionable.
              </Text>
            </Box>
          </Box>
          <Hidden till="lg">
            <Box
              w="430px"
              borderLeftWidth="1"
              borderLeftColor={theme.colors.shared.softer2Gray}
              paddingTop="16"
              paddingX="8"
            >
              <Text fontSize="2xl" fontWeight="semibold">
                Contents
              </Text>
              <VStack marginTop="5" space="2">
                {listContent.map((content, i) => (
                  <Pressable
                    key={i}
                    w="full"
                    paddingY="0.6rem"
                    paddingX="0.6rem"
                    borderWidth="2"
                    borderRadius="xl"
                    borderColor={theme.colors.shared.softGray}
                    backgroundColor={theme.colors.shared.aliceBlue}
                    flexDirection="row"
                    alignItems="center"
                    _hover={{
                      backgroundColor: theme.colors.shared.lightAliceBlue
                    }}
                  >
                    <Center
                      borderRadius="full"
                      h="28px"
                      minW="28px"
                      backgroundColor={'#7777771F'}
                    >
                      <Text>{i + 1}</Text>
                    </Center>
                    <Text
                      fontSize="15px"
                      fontWeight="medium"
                      paddingLeft="3"
                      paddingRight="3"
                    >
                      {content.text}
                    </Text>
                  </Pressable>
                ))}
              </VStack>
            </Box>
          </Hidden>
        </Box>
      </TNCLayout>
    </>
  )
}
