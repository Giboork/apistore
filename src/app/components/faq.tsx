import Container from './container'
import ClientComponent from './faqClient'

export default function faq(props: any) {
  const faqdata = [
    {
      question: 'How much does it cost to use our APIs?',
      answer:
        'Operation and development of APIs are currently fully funded by company Apitalks and its usage is for free.',
    },
    {
      question: 'Can I use it in a commercial project?',
      answer: 'Yes, this you can.',
    },
    {
      question: 'How I will know that data in API were updated?',
      answer:
        'All important information such as time of last update, license and other information are in response of each API call.',
    },
    {
      question: 'What happens in case we issue new version of API?',
      answer:
        'In case of major update that would not be compatible with previous version of API, we keep for 30 days both versions so you will have enough time to transfer to new version. We will inform you about the changes in advance by e-mail.',
    },
  ]

  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <button
              className={`faq-btn flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200 ${
                index === 0 ? 'active' : ''
              }`}
            >
              <span>{item.question}</span>
            </button>
            <div
              className={`faq-answer px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300 ${
                index === 0 ? 'active' : ''
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
