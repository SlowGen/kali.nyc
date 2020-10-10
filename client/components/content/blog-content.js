import React from 'react'
import {Box, Flex, Image} from 'rebass'

const BlogContent = () => {
  return (
    <Flex justifyItems="space-between">
      <Box width={2 / 3} px={2}>
        <h1>Contactless Payments</h1>
        <h2> Why it isn't truly contactless and what we can do to fix it</h2>
        <p>
          In the era of Covid-19, you hear the term “contactless” everywhere.
          The term is not new, but it has become omnipresent in our daily lives.
          Specifically, “contactless payments” are something that many of us
          have been using for years, but now have made it even further into the
          fabric of the new American life.
        </p>
        <h3>What are contactless payments?</h3>
        <p>
          Contactless payments are payments made with credit cards and debit
          cards or other devices, including smartphones and smartwatches, that
          use radio-frequency identification (RFID) or near field communication
          (NFC.) In a nutshell, this means that the actual credit card does not
          have to “swipe” in the machine in order to complete the transaction.
          The lack of a “swipe” is what deems the transaction “contactless” and
          in today’s vernacular, anything “contactless” is thereby SAFE.
        </p>
        <p>
          While the security of such payments is a hot topic and a valid
          consideration when choosing a payment method, for the purpose of this
          article, we will be discussing the physical TOUCH of the payment. So I
          ask, are contactless payments truly “contactless?”
        </p>
        <h3>Where do we use contactless payments?</h3>
        <p>
          On an average pre-Covid day one might find themselves using their
          device to pay for transactions frequently. Morning coffee run, tap and
          go. Afternoon lunch at a corner quick-serve restaurant, tap and go.
          You may even choose to use your device to pay your taxi fare in a
          yellow cab when an Uber just isn’t available. Maybe even your favorite
          happy hour spot accepts Google Pay and Apple Pay, but what really
          happens when we use our device to pay?
        </p>
        <h3>How do contactless payments work?</h3>
        <p>
          Without getting into extremely technical details of how it works, the
          basic idea is pretty simple. Your device creates a digital “token”
          that has very limited and encrypted information in it. This token
          essentially has two bits of information, information that links the
          transaction to your account (i.e. your credit card number… but not
          explicitly!) and a security code (i.e. your PIN.. but again, not
          explicitly.) The token is transmitted to the receiving device, and the
          receiving device connects to the various authentication / transaction
          services to verify, and when successful, the transaction is complete!
          But what happens before and after depends on where you are using your
          device to pay.
        </p>
        <h3>
          <u>
            <a href="">More on RFID and NFC here!</a>
          </u>
        </h3>
        <p>
          Let’s head back to our coffee shop! My local shop uses{' '}
          <u>
            <a
              href="https://squareup.com/us/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Square
            </a>
          </u>{' '}
          as its Point-Of-Sale (POS, a digital register) After ordering my tall
          iced coffee, black, the counter person swivels the iPad around and I
          have to touch to opt in or out on a tip, hit OK and then I am free to
          tap my device to pay and go.
        </p>
        <p>
          It’s now lunchtime and I head over to the sandwich shop for a ham and
          cheese on ciabatta with Russian dressing. This shop uses a standard{' '}
          <u>
            <a
              href="https://www.youtube.com/watch?v=iuh_LF-SQjE"
              target="_blank"
              rel="noopener noreferrer"
            />
          </u>{' '}
          device that is customer-facing. An EMV device is a regular credit card
          machine that is capable of accepting a chipped card, a swipe or a
          contactless payment. The clerk enters the sandwich order into the POS
          and the amount owed appears on the EMV screen. I am instructed to hit
          “OK” to approve, and then I can tap my device and go.
        </p>
        <p>
          After I finish my day, I take a yellow cab to the local watering hole.
          At the end of my ride, the large display screen in the back of the cab
          notifies me of my fare total and I have the option of entering a tip.
          After approving the final total, I am then free to tap my device to
          the EMV machine mounted on the partition.
        </p>
        <p>
          To finish off my evening, I have a few drinks and an after-work snack.
          I notify the bartender that I am ready to pay and that I wish to use
          my device. After I receive my tab, the bartender places the EMV in
          front of me so I can tap to pay. But I can’t go just yet! After
          approval, the slip prints out and is handed to me, where I enter a tip
          and sign, then hand back to the bartender. On another day, I might go
          somewhere where the staff uses hand-held devices. In this case, the
          device would be given to me to enter tip information and perhaps sign
          somewhere on the screen.
        </p>
        <p>
          <i>
            For those not keeping track, that is four “contactless” payments
            that were nowhere near contactless.
          </i>
        </p>
        <p>
          Yes, there are locations and scenarios that provide for more of a
          truly “tap and go” customer experience, but they are the exception,
          not the rule. In America, where tipping is standard everywhere, this
          is most common in establishments where a gratuity would be adjusted in
          after the transaction is approved. Elsewhere, many countries have a
          monetary limit on contactless payments. Each transaction has a maximum
          amount and if that amount is surpassed, the transaction must be
          accompanied by a PIN entry, signature or other additional
          authentication means. In the UK, this maximum is £45. Australia,
          A$100. The US has no such federally mandated limit, though many
          businesses and / or account providers have their own policies.
        </p>
        <h3>What can we do to fix it?</h3>
        <p>
          At the time of this writing, there would need to be some major
          infrastructure changes in order to make truly contactless experiences
          universal. The “token” system would need to allow for more information
          to be provided (such as automatically changing the final total to
          include a tip based on user-device input,) the POS and EMV systems
          would need to be updated to be able to accept that additional
          information and the merchant services that accept the payments on the
          back end would need to be able to verify and accept these payments as
          authorized. None of which are terribly complicated from an engineer’s
          point of view, but coordinating or mandating such an upgrade
          universally, would be.
        </p>
        <p>
          There are already some third party apps that aid in this, but they are
          typically vendor specific and not universal in any way. For example,
          in NYC there are two third party payment systems available for taking
          a yellow cab. Each of them require that you download their app and
          each is only usable in a cab that is also using that particular
          payment app. One cab may take Arrow and the other takes Curb. You
          essentially have to have both on your device and hope that you never
          jump in a cab that doesn’t take either. And that is for a taxi system
          whose payments are heavily regulated by local government! If we were
          to circumvent the current infrastructure issues, we would need a
          universal app or app compatibility that is accepted everywhere and
          allows for all of these features and transactions to be completed on
          the device before you tap and go.
        </p>
        <h3>What do we do in the meantime?</h3>
        <p>
          Given the immediacy of the issues that Covid-19 brings, I expect that
          more and more establishments will begin seeking out third party
          options. Not only for the safety of their customers, but also their
          staff. It is already common for big national chains to have native
          apps available for their customers (Olive Garden, TGIFridays and
          Outback Steakhouse to name a few) and most of them include the option
          to pay your bill from your device. Those that don’t allow payments
          (Red Lobster, Denny’s and Applebee’s e.g.) are most likely working on
          finding a way to integrate. This doesn’t do much to help the already
          struggling mom and pop’s, but the option is available. This also means
          you need a different app for each company, which can be burdensome to
          already overloaded devices.
        </p>
        <p>
          It took nearly 30 years for EMV to become globally accepted and{' '}
          <u>
            <a
              href="https://www.thalesgroup.com/en/americas/united-states/digital-identity-and-security/emv"
              target="_blank"
              rel="noopener noreferrer"
            >
              as of March 2019, only 75% of US merchants are fully integrated.
            </a>
          </u>{' '}
          Contactless as we know it has only been around in some form or another
          for about 10 years. I’m not holding my breath, but change will come.
          It has to.
        </p>
      </Box>
      <Box width={1 / 3} px={2}>
        <Image src="images/photos/contactless.png" />
      </Box>
    </Flex>
  )
}

export default BlogContent
