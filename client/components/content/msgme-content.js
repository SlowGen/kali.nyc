/* eslint-disable no-alert */
import React, {useState} from 'react'
import {Box, Button} from 'rebass'
import {Label, Input, Textarea} from '@rebass/forms'
import axios from 'axios'

const MsgMeContent = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const submitRequest = async e => {
    e.preventDefault()
    console.log({email, message})
    try {
      const response = await axios.post('/msgs', {
        email,
        message
      })
      console.log('response', response)

      if (response.status === 200) {
        alert('Message Sent.')
        setSent(true)
        // e.resetForm()
      } else if (response.status === 500) {
        alert('Message failed to send.')
      }
    } catch (error) {
      console.log('error with axios', error)
    }
  }

  return (
    <Box as="form" onSubmit={submitRequest}>
      <Box>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="jane@example.com"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </Box>
      <Box>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
      </Box>
      <Box>
        <Button>Submit</Button>
      </Box>
    </Box>
  )
}

export default MsgMeContent
