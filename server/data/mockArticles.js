
const mockArticles = [
  {
    _id: '1',
    title: 'The Gut Health Revolution: More Than Just Digestion',
    content: `Recent headlines have hailed the gut microbiome as the "second brain," and for good reason. New research from the Global Health Institute links gut diversity not just to digestion, but to immune function, mood regulation, and even mental clarity.
    
    "We are seeing a clear correlation between diverse plant-fiber intake and robust immune responses," says Dr. Emily Chen, a leading gastroenterologist. The study suggests that consuming 30 different plants a week can significantly improve microbiome health.
    
    The takeaway? It's time to look beyond probiotics and focus on prebiotics—the fibers that feed your good bacteria. A happy gut might just be the secret to a happy mind.`,
    source: 'Daily Health Digest',
    datePublished: new Date('2024-03-24'),
    imageUrl: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    _id: '2',
    title: 'Sleep Science: Why 8 Hours Might Not Be Enough',
    content: `We've all heard the "8-hour rule," but sleep quality is proving to be far more critical than quantity. Sleep scientists are now emphasizing "sleep architecture"—the cycles of REM and Deep sleep that occur during the night.
    
    "You can sleep 9 hours, but if it's fragmented or alcohol-disrupted, you'll wake up exhausted," explains sleep researcher Dr. Mark Solis. The new gold standard focus is on consistency: going to bed and waking up at the same time every day to anchor your circadian rhythm.
    
    Tips for better sleep architecture include viewing morning sunlight, avoiding caffeine after 2 PM, and establishing a winding-down routine that doesn't involve screens.`,
    source: 'The Sleep Journal',
    datePublished: new Date('2024-03-22'),
    imageUrl: 'https://images.unsplash.com/photo-1520206183501-b80df610434f?q=80&w=2071&auto=format&fit=crop'
  },
  {
    _id: '3',
    title: 'The Blue Zone Diet: Secrets of Longevity',
    content: `What do Okinawa, Sardinia, and Ikaria have in common? They are "Blue Zones," regions where people live exceptionally long, healthy lives. Nutritional anthropologists have pinpointed their common dietary thread: a 95% plant-based diet rich in beans, greens, and nuts.
    
    "It's not about restriction; it's about abundance of the right foods," notes nutritionist Sarah Fields. Unlike modern fad diets, the Blue Zone approach is a lifestyle of moderation, social eating, and natural movement.
    
    Embracing these principles could reduce the risk of chronic diseases like diabetes and heart disease. It turns out, the simplest foods might be the most powerful medicine.`,
    source: 'Longevity Weekly',
    datePublished: new Date('2024-03-20'),
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop'
  },
  {
    _id: '4',
    title: 'Digital Detox: Reclaiming Mental Space',
    content: `In an era of constant connectivity, "digital burnout" is becoming a diagnosable condition. Psychologists warn that the constant dopamine loop of notifications is rewiring our attention spans and ramping up anxiety.
    
    "We are losing the art of doing nothing," says Dr. James Alcott. "Boredom is where creativity happens." innovative tech-free retreats are popping up globally, teaching executives and students alike how to disconnect.
    
    Start small: try a "phone-free bedroom" policy. Reclaiming the first and last hour of your day for yourself, rather than your feed, can have profound effects on your mental well-being.`,
    source: 'Mindful Living',
    datePublished: new Date('2024-03-18'),
    imageUrl: 'https://images.unsplash.com/photo-1511871893393-82e9c16b81e3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    _id: '5',
    title: 'Strength Training for Aging: The Fountain of Youth?',
    content: `Forget the treadmill; pick up the weights. A groundbreaking study in the Journal of Applied Physiology suggests that resistance training is the single most effective intervention for delaying aging markers.
    
    Muscle mass naturally declines after 30 (sarcopenia), leading to frailty and metabolic slowdown. "Lifting weights isn't just for bodybuilders; it's for anyone who wants to stay independent in their 80s," advocates physiotherapist Karen Mo.
    
    Two sessions a week focusing on major muscle groups can reverse decades of decline. Strong muscles support strong bones, better balance, and a faster metabolism.`,
    source: 'Active Ageing',
    datePublished: new Date('2024-03-15'),
    imageUrl: 'https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?q=80&w=2148&auto=format&fit=crop'
  },
  {
    _id: '6',
    title: 'Vitamin D: The Sunshine Supplement',
    content: `It's not just a vitamin; it's a hormone precursor that impacts nearly every system in the body. With more people working indoors, Vitamin D deficiency has become a silent epidemic affecting immune health and bone density.
    
    "We used to think it was just for rickets," says Dr. L. Ray. "Now we know it regulates thousands of genes." Supplementation is often necessary, especially in winter months or higher latitudes.
    
    Getting your levels checked is the first step. Combining supplementation with K2 and magnesium ensures proper absorption and utilization, keeping your immunity shield strong.`,
    source: 'Wellness Today',
    datePublished: new Date('2024-03-12'),
    imageUrl: 'https://images.unsplash.com/photo-1527632696010-096d29944445?q=80&w=2070&auto=format&fit=crop'
  },
  {
    _id: '7',
    title: 'Mindfulness Meditation: Rewiring the Stress Response',
    content: `Stress is inevitable; suffering is optional. That's the premise behind Mindfulness-Based Stress Reduction (MBSR), a clinical program now shown to physically alter the structure of the brain.
    
    MRI scans of regular mediators show a shrunken amygdala (the fear center) and a thickened prefrontal cortex (the decision center). "It's weightlifting for your brain," says meditation guide Tara Brach.
    
    Even 10 minutes a day can lower cortisol levels and lower blood pressure. In a high-pressure world, your breath might be the most powerful tool you have.`,
    source: 'Zen Science',
    datePublished: new Date('2024-03-10'),
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000&auto=format&fit=crop'
  },
  {
    _id: '8',
    title: 'Telemedicine: The Future of Doctor Visits',
    content: `The pandemic accelerated the adoption of telehealth, and it's here to stay. Patients are finding that virtual visits are not only convenient but often more effective for routine check-ups and mental health consults.
    
    "It removes the barrier of travel and waiting rooms," notes healthcare analyst John Doe. With the rise of wearable tech, doctors can now monitor vitals remotely, leading to more proactive care.
    
    While it won't replace emergency surgery, telemedicine is democratizing access to specialists and making healthcare more patient-centric than ever before.`,
    source: 'Health Tech Weekly',
    datePublished: new Date('2024-03-08'),
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop'
  }
]

export default mockArticles;