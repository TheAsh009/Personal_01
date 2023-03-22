import React from 'react';
import Card from './Card.js';

export default function Component1() {
  let array = [
    {
      name: 'Lord Shri Ram',
      image:
        'https://i0.wp.com/www.wordzz.com/wp-content/uploads/2020/12/Ram-Mobile-Wallpaper.jpg?fit=900%2C1600&ssl=1',
      description: 'The greater than the greatest man',
    },
    {
      name: 'Lord Shri Krishna',
      image:
        'https://i.pinimg.com/564x/98/cc/da/98ccda4aa8484ea68ae26b26aec18be1.jpg',
      description:
        'His complexion is as enchanting as an emerald, a tamala tree, or a group of beautiful dark clouds',
    },
    {
      name: 'Lord Shri Parshuram',
      image:
        'https://www.thehitavada.com/Encyc/2021/5/14/2_11_36_48_Bhagwan-Parshuram_1_H@@IGHT_449_W@@IDTH_638.jpg',
      description:
        'One of the 10 avatars (incarnations) of the Hindu god Vishnu.',
    },
    {
      name: 'Lord Shri Shiva',
      image:
        'https://w0.peakpx.com/wallpaper/50/255/HD-wallpaper-lord-shiva-mahakal-lord-shiva.jpg',
      description:
        ' Shiva is known to have untamed passion, which leads him to extremes in behaviour.',
    },
    {
      name: 'Godess Durga',
      image:
        'https://tse3.mm.bing.net/th?id=OIP.V8B9WzTZ64dVZzyVy84DtQHaFj&pid=Api&P=0',
      description:
        'Godess Durga depicted as a motherly figure and often depicted as a beautiful woman, riding a lion or tiger.',
    },
    {
      name: 'Godess Saraswati',
      image:
        'https://www.pngall.com/wp-content/uploads/2016/06/Saraswati-PNG.png',
      description:
        'Maa (Mother) Saraswati is a Hindu goddess who represents education.',
    },
  ];

  return (
    <div className="StaticCard">
      <div className="Static">
        <h1>Know Your Culture</h1>
        <p>
          Hinduism is a way of life for many people around the world. The Hindu
          philosophy comes from a wide range of beliefs from scriptures and many
          other varied religious literatures. The Hindu culture is one that
          revolves around love and respect for others. For example, respect for
          elders is a foundation of Hindu culture.
        </p>
      </div>
      <div className="ComponentCard">
        <div className="CardFlex">
          {array.map((i) => {
            return <Card obj={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
