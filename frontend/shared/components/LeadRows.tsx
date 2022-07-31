import { Box, Text, Checkbox, Pressable, Avatar } from 'native-base'
import { theme } from 'shared/styles/theme'
import React from 'react'

export const LeadRows = ({
  leads,
  hideLeads,
  exportLeads,
  exportLead,
  push
}: any) => {
  return leads?.map((l, i) => {
    return (
      <Pressable
        disabled={hideLeads}
        display="flex"
        flexDirection="row"
        key={i}
        marginTop="1.5"
        borderWidth="1"
        borderColor={theme.colors.shared.softGray}
        borderRadius="md"
        paddingX="3"
        paddingY="1.5"
        alignItems="center"
        backgroundColor={theme.colors.shared.aliceBlue}
        _hover={{
          backgroundColor: theme.colors.shared.softerGray
        }}
        onPress={() => push(`/lead/${l.id}`)}
      >
        <Box w="5%">
          <Avatar
            source={{
              // uri: l.profileImageURL
              uri: null
            }}
          >
            {`${l.firstName?.charAt(0) || ''}${l.lastName?.charAt(0) || ''}`}
          </Avatar>
        </Box>
        <Box w="12%">
          <Text fontSize="sm" fontWeight="medium" isTruncated maxW="145">
            {hideLeads
              ? 'Hidden'
              : l.firstName && l.lastName
              ? `${l.firstName} ${l.lastName}`
              : 'Unknown'}
          </Text>
        </Box>
        <Box w="27%">
          <Text fontSize="sm" fontWeight="medium" isTruncated maxW="315">
            {hideLeads ? 'Hidden' : l.title || 'Unknown'}
          </Text>
        </Box>
        <Box w="20%">
          <Text fontSize="sm" fontWeight="medium" isTruncated maxW="240">
            {hideLeads ? 'Hidden' : l.companyName || 'Unknown'}
          </Text>
        </Box>
        <Box w="20.5%">
          <Text fontSize="sm" fontWeight="medium" isTruncated maxW="250">
            {hideLeads ? 'Hidden' : l.email || 'Unknown'}
          </Text>
        </Box>
        <Box w="14%">
          <Text fontSize="sm" fontWeight="medium" isTruncated maxW="150">
            {hideLeads ? 'Hidden' : l.phone || 'Unknown'}
          </Text>
        </Box>
        <Box w="16%">
          <Pressable>
            <Checkbox
              value=""
              isChecked={exportLeads.includes(l)}
              onChange={(value) => exportLead(value, l)}
              accessibilityLabel="Export this lead"
            />
          </Pressable>
        </Box>
      </Pressable>
    )
  })
}
