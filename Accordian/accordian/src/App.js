import React, { useState } from 'react';
import questions from './data';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions , setQuestion] = useState(data)
  return <main>
      <div className="container">
        <h3>Question and Answer about Login </h3>
        <section className='info'>
          {
            questions.map((questions)=>{
              return <SingleQuestion key = {questions.id} {...questions}/>
            })
          }
        </section>
      </div>
  </main>;
}

export default App;
