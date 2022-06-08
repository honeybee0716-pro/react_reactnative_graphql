import React from 'react'
import { Text, VStack } from 'native-base'
import DashboardLayout from '../../layouts/DashboardLayout'

export default function PrivacyPolicy() {
  return (
    <DashboardLayout
      title="Terms and Conditions"
      displaySidebar={false}
      displayScreenTitle={false}
    >
      <VStack
        px={{ base: 4, md: 8 }}
        py={{ base: 4, md: 8 }}
        borderRadius={{ md: '8' }}
        _light={{
          bg: { base: 'white' },
          borderColor: 'coolGray.200'
        }}
        _dark={{
          bg: 'coolGray.800',
          borderColor: 'coolGray.800'
        }}
        borderWidth={{ md: '1' }}
        borderBottomWidth="1"
        space={4}
      >
        <Text
          fontSize="md"
          fontWeight="semibold"
          _dark={{ color: 'coolGray.200' }}
          _light={{ color: 'coolGray.800' }}
        >
          1. Terms
        </Text>
        <Text
          lineHeight="md"
          textAlign="justify"
          letterSpacing="0.5"
          justifyContent="center"
          _dark={{ color: { base: 'coolGray.100', md: 'coolGray.300' } }}
          _light={{ color: 'coolGray.500' }}
        >
          Terms of service are the legal agreements between a service provider
          and a person who wants to use that service. The person must agree to
          abide by the terms of service in order to use the offered service.
          Terms of service can also be merely a disclaimer, especially regarding
          the use of websites.
        </Text>
        <Text
          mt="3"
          fontSize="md"
          fontWeight="semibold"
          _dark={{ color: 'coolGray.200' }}
          _light={{ color: 'coolGray.800' }}
        >
          2. Conditions
        </Text>
        <Text
          lineHeight="sm"
          textAlign="justify"
          letterSpacing="0.5"
          justifyContent="center"
          _dark={{ color: { base: 'coolGray.100', md: 'coolGray.300' } }}
          _light={{ color: 'coolGray.500' }}
        >
          Violations of system or network security may result in civil or
          criminal liability. We will investigate such violations and prosecute
          users who are involved in such violations.
        </Text>
        <VStack px="5" mt="1" space={{ base: 2, md: 2 }}>
          <Text
            lineHeight="sm"
            textAlign="justify"
            letterSpacing="0.5"
            justifyContent="center"
            _dark={{ color: { base: 'coolGray.100', md: 'coolGray.300' } }}
            _light={{ color: 'coolGray.500' }}
          >
            • You agree not to use any device, software or routine to interfere
            or attempt to interfere with the proper working of this Website or
            any activity being conducted on this Website.
          </Text>
          <Text
            lineHeight="sm"
            textAlign="justify"
            letterSpacing="0.5"
            justifyContent="center"
            _dark={{ color: { base: 'coolGray.100', md: 'coolGray.300' } }}
            _light={{ color: 'coolGray.500' }}
          >
            • You agree, further, not to use or attempt to use any engine,
            software, tool, agent or other device or mechanism (including
            without limitation browsers, spiders, robots, avatars or intelligent
            agents) to navigate or search this Website other than the search
            engine and search agents available from us on this Website.
          </Text>
        </VStack>
      </VStack>
    </DashboardLayout>
  )
}
