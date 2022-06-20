import {
  StatusBar,
  Box,
  Center,
  Stack,
  Hidden,
  Text,
  Image,
  HStack,
  VStack,
  Input,
  InputGroup,
  Button,
  Checkbox,
  Link,
  Icon,
  Pressable,
  Flex,
  Select,
  CheckIcon,
  Slider,
  Switch
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import { Dimensions, View } from 'react-native'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { BaseEditor, Descendant, createEditor } from 'slate'
import { ReactEditor, Slate, Editable, withReact } from 'slate-react'
import DashboardLayout from 'shared/layouts/DashboardLayout.dev'
import IconCredits from 'shared/components/icons/IconCredits'
import IconCornerUpRight from 'shared/components/icons/IconCornerUpRight'
import IconZap from 'shared/components/icons/IconZap'
import IconDollarSign from 'shared/components/icons/IconDollarSign'
import IconUploadCloud from 'shared/components/icons/IconUploadCloud'
import IconBarChart from 'shared/components/icons/IconBarChart'
import IconCompass from 'shared/components/icons/IconCompass'
import IconDownload from 'shared/components/icons/IconDownload'
import IconEye from 'shared/components/icons/IconEye'
import IconClock from 'shared/components/icons/IconClock'
import IconCalendar from 'shared/components/icons/IconCalendar'
import IconShoppingCart from 'shared/components/icons/IconShoppingCart'
import IconMoreVertical from 'shared/components/icons/IconMoreVertical'
import IconChevronDown from 'shared/components/icons/IconChevronDown'
import IconPlayCircle from 'shared/components/icons/IconPlayCircle'
import IconCreditCard from 'shared/components/icons/IconCreditCard'
import IconLightcoin from 'shared/components/icons/IconLightcoin'
import IconNFC from 'shared/components/icons/IconNFC'
import IconEdit from 'shared/components/icons/IconEdit'
import IconCornerLeftDown from 'shared/components/icons/IconCornerLeftDown'
import IconMasterCard from 'shared/components/icons/IconMasterCard'
import IconVISA from 'shared/components/icons/IconVISA'
import IconMail from 'shared/components/icons/IconMail'
import IconHelpCircle from 'shared/components/icons/IconHelpCircle'
import IconUser from 'shared/components/icons/IconUser'
import IconAlignLeft from 'shared/components/icons/IconAlignLeft'
import IconFileText from 'shared/components/icons/IconFileText'
import IconImage from 'shared/components/icons/IconImage'
import IconX from 'shared/components/icons/IconX'
import IconPen from 'shared/components/icons/IconPen'
import IconPlus from 'shared/components/icons/IconPlus'
import IconBook from 'shared/components/icons/IconBook'
import IconLists from 'shared/components/icons/IconLists'
import IconFlag from 'shared/components/icons/IconFlag'
import IconFile from 'shared/components/icons/IconFile'
import IconFacebookCircleWhite from 'shared/components/icons/IconFacebookCircleWhite'
import IconLink from 'shared/components/icons/IconLink'
import IconTwitterWhite from 'shared/components/icons/IconTwitterWhite'
import IconInstagramWhite from 'shared/components/icons/IconInstagramWhite'
import IconBold from 'shared/components/icons/IconBold'
import IconItalic from 'shared/components/icons/IconItalic'
import IconUnderline from 'shared/components/icons/IconUnderline'
import IconTextMore from 'shared/components/icons/IconTextMore'
import IconAlignCenter from 'shared/components/icons/IconAlignCenter'
import IconOrderedList from 'shared/components/icons/IconOrderedList'
import IconParagraphMore from 'shared/components/icons/IconParagraphMore'
import IconSmile from 'shared/components/icons/IconSmile'
import IconInsertMore from 'shared/components/icons/IconInsertMore'
import IconUndo from 'shared/components/icons/IconUndo'
import IconRedo from 'shared/components/icons/IconRedo'
import IconPaperClip from 'shared/components/icons/IconPaperClip'
import TNCLayout from './components/TNCLayout'

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
            <Box paddingRight={{ base: '0', lg: '10' }}>
              <Text
                fontSize={{ base: 'sm', sm: 'md', lg: 'xl' }}
                fontWeight="medium"
              >
                General ClientEye Terms and Conditions Version 2
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
                Last Updated on : 06/20/2022
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop="5"
              >
                By registering, renewing, or accessing any parts of the
                ClientEye service you agree to these terms and conditions.{' '}
                <br />
                <br />
                Please read these Terms and Conditions (“Terms”) carefully
                before using the services offered by ClientEye (“the Service”)
                operated by ClientEye, Inc. (“us”, “we”, or “our”). These Terms
                sets forth the legally binding terms and conditions and
                constitutes the entire agreement between you and ClientEye for
                your use of the Service. The term “you” or “User of Service”
                refers to your Company and shall also include your employees or
                other authorized users to the extent applicable and permitted
                under your subscription of the Service.
                <br />
                <br />
                By accessing or using the Service in any manner, including, but
                not limited to, visiting or browsing the Service, subscribing to
                automated emails or contributing content or other materials to
                the Service, you agree to be bound by these Terms (“Agreement”).
                Capitalized terms are defined in these Terms.
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
                The Service
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                The Service is a lead generation tool for B2B companies. We
                reserve the right to modify, discontinue, and restrict,
                temporarily or permanently, all or part of the Service without
                notice at our sole discretion. Neither we nor our suppliers or
                licensors will be liable to you or to any third party for any
                modification, discontinuance, or restriction of the Service. We
                might, at our sole discretion and from time to time, offer you
                free trials of the Service or selected features of the Service
                for a limited time period. Once the free trial period ends, your
                access to such trial features terminates.
              </Text>
              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                Eligibility
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                The Service is not intended for users that are consumers (being
                an individual acting primarily for purposes other than a trade,
                business or profession) and the applicability of consumer
                protection legislation is therefore excluded. You must be 18
                years of age or older to enter into this agreement and use the
                Service. You represent and warrant that any information you
                submit is true and accurate and that you are 18 years of age or
                older and are fully able and competent to enter into and abide
                by these Terms.
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
              </Text>

              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                Account Registration
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                You must register to use certain features of the Service. When
                you register, you agree to (a) provide accurate, current and
                complete information about you as may be prompted by
                registration forms on the Service (“Registration Data”); (b)
                maintain the security of any logins, passwords, or other
                credentials that you select or that are provided to you for use
                on the Service; (c) maintain and promptly update the
                Registration Data, and any other information you provide to us,
                and to keep all such information accurate, current, and
                complete; and (d) notify us immediately of any unauthorized use
                of your account or any other breach of security by emailing us
                using our contact form.
              </Text>

              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                Fees and Payment
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                You agree to pay your invoices based on the subscription package
                you select and its terms and conditons. Qualified leads are
                described as any individual person’s identity that is verified
                by ClientEye to have visited your website and/or clicked on your
                links or ads. ClientEye reserves the right to implement fees or
                change the fees for the Service at any time by providing you
                notice on the Service or otherwise. All prices are exclusive of
                any value-added taxes. Paid Services may be purchased with a
                credit card or by periodical invoice billing. When you purchase
                any Paid Services by credit card, you authorize ClientEye or its
                third-party payment processors to charge the credit card
                identified by you (which you represent and warrant that you are
                authorized to use) all applicable fees for your purchase,
                including all applicable taxes, and you agree that our payment
                provider can store your credit card information. When you
                purchase any Paid Services by periodical billing you shall
                provide us with the appropriate invoicing details and ClientEye
                will invoice you in beforehand using the information provided by
                you. Payment term for invoices is 14 days net from date of
                invoice. If ClientEye does not receive payment from you or your
                credit card provider, you agree to pay all amounts due upon
                demand and ClientEye may suspend your access to the Service
                until full payment is received or terminate the Service. All
                sales are final and ClientEye will not issue refunds, including
                for prepaid periodical fees. If you choose an automatic
                recurring payment and later decide to end your subscription,
                cancelling the payment is your responsibility. ClientEye does
                not refund automatic payments not cancelled in time.
              </Text>

              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                Use Restrictions
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                Your right to use the Service is personal, limited to your
                internal business purposes, non-transferable, non-exclusive,
                revocable, and subject to your compliance with the Terms at all
                times, including your timely payment of all applicable fees for
                the Services. Without limiting the generality of the foregoing,
                you may not: access, monitor, or copy any content or information
                on the Service using any robot, spider, scraper, or other
                automated means or any manual process for any purpose without
                our express written permission; bypass or circumvent measures
                employed to prevent or limit access to the Service or certain
                features of the Service; take any action that imposes, or may
                impose, in our discretion, an unreasonable or disproportionately
                large load on our infrastructure; “frame”, “mirror,” or
                otherwise incorporate any part of the Service into any other
                website without our prior written authorization; violate any
                applicable local, provincial, national, or international law or
                regulation; or We may at any time suspend or terminate your
                access to the Service if we have reason to believe that you are
                not complying with the Terms or you are otherwise abusing the
                Service.
              </Text>

              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                Intellectual Property and Trademarks
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                We, our affiliates, and our suppliers and licensors own all
                right, title, and interest, including all intellectual property
                rights, in and to the Service, and any services available in
                connection with the Service including any new Ad accounts that
                we may create for your business. Except for those rights
                expressly granted in these Terms, no other rights are granted,
                either express or implied, to you. All copying, distribution or
                other use of the Service or any third-party services or content
                except as expressly permitted hereunder is prohibited without
                the prior written consent of the relevant rights holders.
                ClientEye, ClientEye logos, and any other product or service
                name or slogan contained on the Service are trademarks or
                registered trademarks of ClientEye and its suppliers or
                licensors, and may not be copied, imitated or used, in whole or
                in part, without the prior written permission of the applicable
                trademark holder. All other trademarks, registered trademarks,
                product names and company names or logos mentioned on the
                Service are the property of their respective owners. Reference
                to any products, services, processes or other information, by
                trade name, trademark, manufacturer, supplier or otherwise, does
                not constitute or imply endorsement, sponsorship, or
                recommendation thereof by us, or vice versa. You agree that you
                will not try to reverse engineer or otherwise identify any trade
                secrets or operations of the ClientEye system and agree that any
                attempt in doing so will be subject to damages. You also agree
                that you will not share or publicize any of ClientEye’s
                operations, trade secrets, techniques or anything that would be
                unique to ClientEye’s business or software.
              </Text>

              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                Availability and Disclaimer of Warranties
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                Your use of the Service is at your sole risk. No advice or
                information, whether oral or written, obtained by you from the
                service will create any warranty regarding ClientEye that is not
                expressly stated in these Terms. EXCEPT FOR THE WARRANTIES
                EXPRESSLY PROVIDED BY CLIENTEYE HEREUNDER, THE SERVICE IS
                PROVIDED “AS-IS” AND “AS AVAILABLE” AND CLIENTEYE (AND ITS
                SUPPLIERS) EXPRESSLY DISCLAIM ANY WARRANTIES AND CONDITIONS OF
                ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING THE WARRANTIES
                OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, TITLE, QUIET ENJOYMENT, OR NON-INFRINGEMENT. CLIENTEYE
                MAKES NO WARRANTY THAT THE SERVICES (A) WILL MEET CUSTOMER’S
                REQUIREMENTS; OR (B) WILL BE AVAILABLE ON AN UNINTERRUPTED,
                FULLY SECURE, OR ERROR-FREE BASIS.
              </Text>

              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                Term, Cancellation and Termination
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                Term of the Paid Services enters into force when this agreement
                is accepted. We may terminate your access to the Service,
                without cause or notice, which may result in the forfeiture and
                destruction of all information associated with you.
              </Text>

              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                Data from third party services
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                ClientEye has no control over, and assumes no responsibility
                for, the content, privacy policies, or practices of any
                third-party services from where data is integrated to ClientEye.
                ClientEye may provide you ClientEye Contacts data from other
                sources (“Data Source”) and in relation to such data in the
                Service you agree to the following additional terms: you agree
                not to use any Data Source (whether alone or in combination with
                any other data) in any manner that violates the The Applications
                Policy, or any of the restrictions set forth in Section 5
                hereof; you agree to provide commercially reasonable physical
                and logical security controls to prevent security breaches or
                unauthorized access to Data Source that you are authorized to
                download from the Service; except for exporting the Data Source
                through the functionalities provided by the Service, all rights
                to Data Source are limited to use within the Service; all rights
                to Data Source automatically terminate upon termination of your
                subscription term or by notice from ClientEye; you agree to
                delete all Data Source upon termination of your subscription or
                by notice from ClientEye, other than any Data Output that has
                been derived from Data Source in compliance with these Terms
                prior to the termination or expiration date; you agree not to
                use any data Data Source from the Service: for cookie tracking,
                ad exchanges, ad networks, data brokerages, or sending
                electronic communications (including email) in violation of the
                law applicable to these Terms or applicable in your domicile; to
                determine any person's employability, credit worthiness, credit
                standing, credit capacity, or other characteristics related to
                such person's manner or mode of living; or in any manner that
                exceeds the scope of the rights granted in these Terms or the
                limits or restrictions set forth in these Terms. For the
                purposes of this section 9 “Data Output” means any data,
                reports, analysis or other output developed by or on behalf of
                you that are derived from Data Source; provided that such Data
                Output: (a) does not contain all or any substantial part of the
                original Data Source in unaltered form or provided on a
                stand-alone basis, and (b) is not capable of being reverse
                engineered, decompiled, disassembled or otherwise modified to
                obtain the original, unaltered form of the Data Source.
              </Text>

              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                Links To Other Sites and Services
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                Our Service may contain links to third-party sites that are not
                owned or controlled by ClientEye. ClientEye has no control over,
                and assumes no responsibility for, the content, privacy
                policies, or practices of any such third party sites or
                services. We strongly advise you to read the terms and
                conditions and privacy policy of any third-party site that you
                visit.
              </Text>

              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                Privacy Notice
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                By using the Service, you consent to receiving electronic
                communications and phone calls from us. These communications may
                include notices about your account and information concerning or
                related to the Service.
              </Text>

              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                Customer Data
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                You, your subsidiaries, affiliates and customers retain all
                rights pertaining to all data, personal data or other
                information that you, or another party on your behalf, provides
                to us for the purpose of providing the Service (“Customer
                Data”). For the avoidance of doubt, Customer Data is considered
                Confidential Information. We have the right to anonymize
                Customer Data including data disclosed, used or developed by you
                in connection with your use of the Service and use such data to
                compile statistics and to monitor and improve our Services. You
                will defend, indemnify and hold harmless ClientEye, its
                subsidiaries, affiliates, partners and third-party advertisers
                and their respective directors, officers, agents, employees,
                licensors, and suppliers from and against any costs, damages,
                expenses, and liabilities (including, but not limited to,
                reasonable attorneys’ fees) arising out of any claims or actions
                by any third party that relates to an actual or alleged
                infringement of a third party’s intellectual property rights by
                the Customer Data.
              </Text>

              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                Limitation of Liability
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                NEITHER CLIENTEYE NOR ITS SUPPLIERS OR LICENSORS WILL BE LIABLE
                FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE
                OR EXEMPLARY DAMAGES, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR
                LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES
                (EVEN IF CLIENTEYE OR ANY SUPPLIER OR LICENSOR OF CLIENTEYE HAS
                BEEN ADVISED OF THE POSSIBILITY OF THESE DAMAGES), ARISING OUT
                OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR YOUR INABILITY TO
                ACCESS OR USE THE SERVICE OR ANY CONTENT. CLIENTEYE’S MAXIMUM
                TOTAL LIABILITY FOR ALL CLAIMS UNDER THESE TERMS OR OTHERWISE IN
                RELATION TO THE SERVICE, WHETHER IN CONTRACT, TORT, OR
                OTHERWISE, IS LIMITED TO ONE HUNDRED EUROS (100 EUR). ANY
                LIMITATIONS OF LIABILITY UNDER THIS SECTION 14 SHALL NOT APPLY
                IN THE EVENT OF DEATH, PERSONAL INJURY, FRAUD OR FRAUDULENT
                MISREPRESENTATION OR IN THE EVENT OF WILLFUL MISCONDUCT OR GROSS
                NEGLIGENCE.
              </Text>

              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                Governing Law and Dispute Resolution
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                This Agreement (and any further rules, policies, or guidelines
                incorporated by reference) shall be governed and construed in
                accordance with the laws of Ontario, Canada , without giving
                effect to any principles of conflicts of law. Any dispute,
                controversy or claim arising out of or relating to this
                contract, or the breach, termination, or validity thereof, shall
                be finally settled by arbitration in accordance with the
                Arbitration Rules of the Ontario, Canada. The seat of
                arbitration shall be the Greater Toronto Area. The number of
                arbitrators shall be one. The language of the arbitration shall
                be English.
              </Text>

              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                Changes To These Terms
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                We reserve the right, at our sole discretion, to modify or
                replace these Terms by posting the updated terms to
                https://www.clienteye.com/terms. Your continued use of the
                Service after any such changes constitutes your acceptance of
                the new Terms. Please review these Terms periodically for
                changes. If you do not agree to any of these Terms or any
                changes to these Terms, do not use, access or continue to access
                the Service or discontinue any use of the Service immediately.
              </Text>

              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                Confidentiality
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                Both parties agree to keep private all processes, trade secrets,
                techniques or anything that is unique to their business private
                and not shared privately or publicly with any person outside of
                their organization and outside of the need-to-know basis to
                execute this agreement. You agree not to make any public
                statements about ClientEye including but not limited to reviews.
              </Text>

              <Text
                fontSize={{ base: 'md', lg: '22px' }}
                fontWeight="medium"
                marginTop={{ base: '5', lg: '8' }}
              >
                Other Terms
              </Text>
              <Text
                fontSize={{ base: '13px', lg: 'lg' }}
                fontWeight="medium"
                marginTop={{ base: '2', lg: '5' }}
              >
                Our failure to act in a particular circumstance does not waive
                our ability to act with respect to that circumstance or similar
                circumstances. Any provision of these Terms that is found to be
                invalid, unlawful, or unenforceable will be severed from these
                Terms, and the remaining provisions of these Terms will continue
                to be in full force and effect. The section headings and titles
                in these Terms are for convenience only and have no legal or
                contractual effect. Any provision in these Terms that by its
                nature should survive the termination of your license to access
                the Service or any termination of these Terms (including,
                without limitation, provisions governing indemnification,
                limitations on liability, disclaimers of warranty, and ownership
                of intellectual property) will continue to remain in full force
                and effect after any such termination.
              </Text>
            </Box>
          </Box>
        </Box>
      </TNCLayout>
    </>
  )
}
