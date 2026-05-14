import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { guides } from "@/lib/site-data";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

type GuideContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

type GuideSection = {
  heading: string;
  content: GuideContentBlock[];
};

type GuideArticle = {
  intro: string[];
  sections: GuideSection[];
  conclusion: string[];
};

const guideArticles: Record<string, GuideArticle> = {
  "protect-portuguese-property-while-away": {
    intro: [
      "Owning a property in Portugal is a privilege, but it also comes with responsibility, especially when the home is not occupied all year round. Whether you have a second home in Setubal, an apartment in Lisbon, a family property in the Algarve, or a house you visit only during holidays, an empty property still needs regular attention.",
      "Many issues that affect occasional-use homes start small. A minor leak, a closed-up room with poor ventilation, a power trip, a full post box, or a misplaced set of keys may not seem urgent at first. But when nobody is there to notice, simple problems can become stressful and expensive to deal with from abroad.",
      "This guide explains the practical steps you can take to protect your Portuguese property while you are away, and when local property checks can give you extra peace of mind.",
    ],
    sections: [
      {
        heading: "Why empty homes in Portugal need regular checks",
        content: [
          { type: "paragraph", text: "Portugal's climate is one of the reasons many people choose to buy here. The mild winters, warm summers and coastal lifestyle make it ideal for second homes and occasional stays. But the same climate can also create specific property-care challenges." },
          { type: "paragraph", text: "Homes that are closed for long periods can suffer from poor airflow. In coastal areas, humidity and salt air can affect walls, windows, fittings, locks and outdoor spaces. In older buildings, especially in historic parts of Lisbon, Setubal or smaller towns, plumbing and electrical systems may need closer monitoring. Rural or semi-rural properties can also face issues with pests, gardens, pools, gates and exterior maintenance." },
          { type: "paragraph", text: "Regular checks are not about expecting something to go wrong. They are about noticing small changes early." },
          { type: "paragraph", text: "For foreign owners and Portuguese owners living abroad, this is where local property care Portugal services can be useful. A trusted person on the ground can visit the property, check the basics, take photos, report concerns and help coordinate practical next steps when needed." },
          { type: "paragraph", text: "This is particularly important for second homes that are only used during school holidays, summer months, family visits or occasional work trips. A property may look perfectly fine when you lock the door, but after several weeks of rain, heat, wind or general inactivity, conditions can change." },
        ],
      },
      {
        heading: "The most common risks: leaks, damp, power issues, pests, post, access",
        content: [
          { type: "paragraph", text: "Every home is different, but occasionally empty properties often face similar risks." },
          { type: "paragraph", text: "Leaks are one of the biggest concerns. A small drip under a sink, a leaking boiler, a roof issue after heavy rain, or water entering around a window can cause damage if left unnoticed. Even a minor leak can affect flooring, cupboards, plaster or neighbouring properties in apartment buildings." },
          { type: "paragraph", text: "Damp and mould are also common in homes that remain closed for long periods. This can happen when there is not enough ventilation, especially during wetter months. Built-in wardrobes, bathrooms, kitchens and rooms with limited sunlight are often the first places to check." },
          { type: "paragraph", text: "Power issues can be frustrating when you arrive after a long journey. A tripped fuse, a faulty appliance, a fridge that has stopped working or an alarm system that has lost power can quickly turn a planned stay into an emergency. For landlords, power issues between tenants can also delay cleaning, maintenance or access." },
          { type: "paragraph", text: "Pests can appear even in well-kept properties. Ants, cockroaches, rodents, wasps or other insects may become a problem when a property is quiet. Food left behind, small entry points, garden waste or damp areas can make this worse." },
          { type: "paragraph", text: "Post and deliveries can also create problems. A full mailbox is a visible sign that nobody is home. Important letters may be missed, including utility notices, condominium updates, bank letters or local communications. For owners who do not live in Portugal full-time, this can be particularly stressful." },
          { type: "paragraph", text: "Access issues are another practical risk. Keys get misplaced, locks become stiff, remote controls stop working, gates fail, or cleaners and contractors cannot enter when needed. When the owner is abroad, even a simple access problem can become complicated." },
          { type: "paragraph", text: "These are the everyday reasons why second home care Portugal is not only about cleaning before arrival. It is about ongoing observation, basic prevention and having someone local who knows the property." },
        ],
      },
      {
        heading: "What owners should do before leaving",
        content: [
          { type: "paragraph", text: "Before leaving your Portuguese property empty, it helps to create a simple routine. The goal is not to make the home perfect, but to reduce avoidable risks." },
          { type: "paragraph", text: "Start with water. Check taps, toilets, visible pipework, boilers and outdoor water points. Make sure nothing is dripping. Depending on the property and your setup, you may decide to turn off the water supply before leaving. Where this is not practical, make sure someone can check the property periodically." },
          { type: "paragraph", text: "Next, review electricity. Unplug non-essential appliances where appropriate. Empty the fridge if the power will be turned off, or make sure it is clean and functioning if left on. Check that alarms, routers, security systems and any essential devices are working properly." },
          { type: "paragraph", text: "Ventilation is also important. Leave internal doors open where possible to allow air to circulate. Avoid leaving damp towels, wet laundry or anything that may trap moisture. In wardrobes, leave some space between items and walls. Consider using moisture absorbers in areas prone to damp." },
          { type: "paragraph", text: "Clean the property before closing it. Food crumbs, rubbish, open packets and standing water can attract pests. Empty bins, clean surfaces, remove perishables and check cupboards. This is especially important if the property will be empty during warmer months." },
          { type: "paragraph", text: "Secure doors, windows, shutters, balconies and outdoor areas. Check locks, gates, garages and storage rooms. If you have outdoor furniture, plants or pool equipment, consider weather and wind exposure." },
          { type: "paragraph", text: "Handle post and documents. Ask someone to collect post regularly or arrange mail forwarding where suitable. Keep a record of important utility providers, condominium contacts, insurance details, emergency contacts and local suppliers." },
          { type: "paragraph", text: "Finally, prepare for access. Leave a spare key with a trusted person or professional keyholding service. Make sure they know how to enter the property, where the fuse box is, how to turn off the water if needed, and who to contact in an emergency." },
          { type: "paragraph", text: "These steps are simple, but they make a significant difference to how manageable the property is while you are away." },
        ],
      },
      {
        heading: "How regular property checks reduce stress and costs",
        content: [
          { type: "paragraph", text: "Regular property checks create a rhythm of care. Instead of waiting until you return, you receive updates while the property is empty. This is especially useful for owners who live in another country, travel frequently, or cannot easily ask family and friends to help." },
          { type: "paragraph", text: "A good property check is practical and structured. It may include checking doors and windows, looking for signs of leaks or damp, airing rooms, running taps, flushing toilets, checking electricity, inspecting visible damage, collecting post and sending photo updates." },
          { type: "paragraph", text: "For owners in the capital or surrounding areas, property checks Lisbon services can be especially helpful because many apartments are in older buildings, shared blocks or busy urban locations. A local visit can identify issues that are difficult to understand from abroad, such as building notices, access changes, water ingress, neighbour concerns or maintenance work in the condominium." },
          { type: "paragraph", text: "Regular checks do not remove every risk. No service can guarantee that nothing will ever happen. But they do reduce the chance of a property being completely unattended for months. They also give owners a clearer picture of the home's condition." },
          { type: "paragraph", text: "This can make decision-making easier. If a small issue appears, you can choose whether to send a contractor, arrange cleaning, contact the condominium or wait until your next visit. Without local eyes on the ground, owners are often forced to make decisions with very little information." },
          { type: "paragraph", text: "For landlords with occasionally empty properties, checks between tenants can also be valuable. A property may need airing, cleaning, meter readings, minor repairs or readiness checks before the next occupant. This is not the same as full rental management. It is simply sensible care during gaps in occupancy." },
        ],
      },
      {
        heading: "When to ask for local support",
        content: [
          { type: "paragraph", text: "You may not need professional support if you live nearby, have trusted family close to the property, or visit regularly. But absent owner property services are worth considering when distance makes simple tasks difficult." },
          { type: "paragraph", text: "Local support is especially useful if you live outside Portugal for most of the year, only visit during holidays or a few times per year, own a property in an older building or coastal area, have had previous problems with damp, leaks or pests, need someone to hold keys securely, rely on cleaners or contractors, want photo updates after each visit, worry about post, utility notices or access, want the home prepared before arrival, or simply do not want to ask neighbours or friends too often." },
          { type: "paragraph", text: "For many owners, the emotional benefit is just as important as the practical one. Knowing that someone has checked the property, opened the windows, looked for visible issues and sent photos can make ownership feel lighter." },
          { type: "paragraph", text: "This is the role of a home watch Lisbon or Setubal-style service. It is not about taking control away from the owner. It is about being a reliable local presence when the owner is not there." },
          { type: "paragraph", text: "A good property care provider should be clear about what is included, what costs extra, and what happens if a problem is found. Repairs, deep cleaning, laundry, emergency call-outs and third-party supplier work are usually separate from routine check fees. Transparency matters." },
          { type: "paragraph", text: "You should also look for a service that communicates in a way that suits you. For most absent owners, simple WhatsApp or email updates with photos are more useful than complicated reports. The best service is one that helps you feel informed without overwhelming you." },
        ],
      },
    ],
    conclusion: [
      "Leaving a property empty in Portugal is common, especially for second-home owners, expats, foreign investors and Portuguese families living abroad. But an empty home should not be forgotten between visits.",
      "With a few sensible steps before departure, and regular local checks while you are away, you can keep a clearer view of your property's condition and respond more calmly if something needs attention.",
      "CasaMinder provides warm, practical property care for owners who live away, including property checks, keyholding, housekeeping coordination and arrival preparation across Lisbon, Setubal and surrounding areas.",
      "To get started, book a property check and receive a clear update on your home's current condition, with practical recommendations for the level of care it may need while you are away.",
    ],
  },
  "empty-home-checklist-portugal": {
    intro: [
      "Owning a second home in Portugal should feel enjoyable, not stressful. But when a property is empty for weeks or months at a time, small issues can easily go unnoticed. A closed-up apartment in Lisbon, a villa near Setubal, or a family home used only during holidays still needs regular care.",
      "An empty property is not simply paused until you return. Water systems, ventilation, electricity, post, access, cleaning and security all need a little attention. This empty home checklist Portugal guide is designed for second-home owners, expats, Portuguese owners living abroad and landlords whose properties are occasionally unoccupied.",
      "It is not legal, tax or insurance advice. It is a practical guide to help you leave your property in a safer, cleaner and more organised condition.",
    ],
    sections: [
      {
        heading: "Before you leave the property",
        content: [
          { type: "paragraph", text: "Before locking the door, walk through the property slowly and check each room. It can be tempting to rush, especially if you are packing for a flight or travelling with family, but this final inspection is important." },
          { type: "paragraph", text: "Start with the basics. Remove rubbish, empty food from the fridge if needed, check balconies and terraces, close windows properly and make sure no taps are dripping. Look under sinks, around toilets and near boilers for any visible signs of water. If something looks unusual, deal with it before leaving rather than hoping it will be fine." },
          { type: "paragraph", text: "For owners who only visit a few times a year, it helps to keep a printed or digital checklist. Each time you leave, follow the same process. This creates consistency and reduces the chance of forgetting something simple." },
          { type: "paragraph", text: "Practical departure checklist:" },
          {
            type: "list",
            items: [
              "Empty bins and remove food waste",
              "Clear open food packets from cupboards",
              "Check all taps, toilets and visible pipework",
              "Look for signs of damp, stains or leaks",
              "Close and secure all windows and shutters",
              "Lock doors, balconies, storage rooms and garages",
              "Bring in or secure outdoor furniture",
              "Check that appliances are off or set correctly",
              "Remove valuables from visible areas",
              "Take photos of the property before departure",
              "Leave keys with a trusted local contact if needed",
              "Confirm who can access the property in an emergency",
              "Make a note of meter readings where useful",
              "Collect or redirect post where possible",
            ],
          },
          { type: "paragraph", text: "This kind of preparation is a simple but important part of second home care Portugal. The aim is not to make the property perfect. It is to leave it in a condition that is easier to monitor, clean and reopen later." },
        ],
      },
      {
        heading: "Utilities, water and ventilation",
        content: [
          { type: "paragraph", text: "Utilities are one of the most important areas to think about before leaving a property empty. Water and electricity issues can be inconvenient at best and damaging at worst." },
          { type: "paragraph", text: "Water should always be checked carefully. Look at taps, showers, toilets, kitchen pipes, washing machine connections and boilers. If your property setup allows it, you may decide to turn off the water supply while you are away. If not, make sure somebody local can check the property regularly." },
          { type: "paragraph", text: "Electricity depends on how the home is used. Some owners leave the power on for alarms, routers, fridges, security cameras or pool systems. Others prefer to switch off non-essential appliances. Whatever you choose, make sure the decision is deliberate. Do not leave appliances running unnecessarily, and do not leave a fridge full of food if there is any chance the power may be interrupted." },
          { type: "paragraph", text: "Ventilation is especially important in Portugal, particularly during wetter months and in coastal areas. Homes that remain closed for a long time can develop a stale smell, condensation or mould. Bathrooms, wardrobes, storage rooms and north-facing spaces often need extra attention." },
          { type: "paragraph", text: "Before leaving:" },
          {
            type: "list",
            items: [
              "Open internal doors to encourage airflow",
              "Avoid leaving damp towels or wet laundry",
              "Leave wardrobes slightly open if suitable",
              "Use moisture absorbers in problem areas",
              "Clean bathrooms and kitchens thoroughly",
              "Check window seals and areas prone to condensation",
              "Ask someone to air the property during longer absences",
            ],
          },
          { type: "paragraph", text: "Seasonal departures need different preparation. If you are leaving after summer, make sure the property is clean, dry and well aired before autumn rain arrives. If you are leaving before the hottest months, remove food, check pest risks and secure outdoor areas. If the property is near the sea, remember that salt air and humidity can affect locks, metal fittings and exterior surfaces over time." },
          { type: "paragraph", text: "Good property care Portugal is often about these small routines. They are not glamorous, but they help keep the home in better condition between visits." },
        ],
      },
      {
        heading: "Security and access",
        content: [
          { type: "paragraph", text: "Security is not only about locks and alarms. It is also about making sure the property does not look forgotten." },
          { type: "paragraph", text: "A full post box, dusty entrance, closed shutters for months, or no local contact can make a property feel unattended. Even in safe neighbourhoods, it is better when someone checks the home regularly and deals with visible signs of absence." },
          { type: "paragraph", text: "Before you leave, check all entry points. This includes the front door, balcony doors, windows, garage, storage areas, gates and any shared building access. If you have an alarm, test it. If you use cameras or smart devices, make sure they are connected and working." },
          { type: "paragraph", text: "Access is equally important. Many owners only realise they have an access problem when something goes wrong. A cleaner cannot enter. A contractor needs to inspect a leak. A neighbour reports an issue. A family member arrives and the key is not available." },
          { type: "paragraph", text: "To avoid this, prepare a simple access plan:" },
          {
            type: "list",
            items: [
              "Keep one spare key with a trusted person or professional keyholding service",
              "Label keys clearly but safely",
              "Record alarm instructions where appropriate",
              "Share emergency contact details",
              "Keep condominium or building contact information available",
              "Make sure someone knows how to turn off water and electricity",
              "Confirm who is allowed to authorise urgent supplier visits",
            ],
          },
          { type: "paragraph", text: "For owners with properties in or near the capital, property checks Lisbon can be particularly useful. Many Lisbon apartments are in shared buildings, where access, post, condominium notices and maintenance issues may need local attention. The same applies to homes in Setubal, Almada, Sesimbra, Montijo, Azeitao and surrounding areas." },
          { type: "paragraph", text: "A local person does not replace the owner's responsibility. But they can make practical situations much easier to manage when the owner is abroad." },
        ],
      },
      {
        heading: "Cleaning, linen and arrival readiness",
        content: [
          { type: "paragraph", text: "An empty home still needs housekeeping. Dust settles, rooms become stale, bathrooms need airing, and outdoor areas may need attention. If the property is only used during holidays, it is easy to underestimate how much preparation is needed before arrival." },
          { type: "paragraph", text: "The best approach is to separate closing clean from arrival clean." },
          { type: "paragraph", text: "A closing clean is done before the property is left empty. It focuses on hygiene, rubbish removal, pest prevention and leaving the home in a tidy condition." },
          { type: "paragraph", text: "An arrival clean is done shortly before you or your guests return. It focuses on comfort: fresh linen, aired rooms, clean bathrooms, floors, kitchen surfaces and outdoor areas." },
          { type: "paragraph", text: "For homes in the Setubal region, arranging reliable housekeeping Setubal support can make arrivals feel much smoother. This is especially helpful if you travel with children, arrive late at night, or use the property only a few times a year." },
          { type: "paragraph", text: "Before leaving, think about:" },
          {
            type: "list",
            items: [
              "Washing and drying linen properly",
              "Avoiding damp towels or bedding in closed rooms",
              "Leaving beds unmade if the property will be empty for a long period",
              "Storing cushions and fabrics away from damp areas",
              "Emptying the fridge and cleaning shelves",
              "Removing bathroom products that may leak or expire",
              "Checking outdoor furniture, umbrellas and terraces",
              "Booking a pre-arrival clean in advance",
            ],
          },
          { type: "paragraph", text: "If you only visit a few times a year, create a standard arrival ready routine. This might include airing the home, cleaning bathrooms, preparing beds, checking hot water, turning on the fridge, testing Wi-Fi and confirming that keys are available." },
          { type: "paragraph", text: "The goal is simple: when you arrive, the property should feel like a home, not a task list." },
        ],
      },
      {
        heading: "Why a local property check still matters",
        content: [
          { type: "paragraph", text: "Even the best departure checklist cannot replace regular local checks. A property can be perfectly prepared when you leave and still develop issues later." },
          { type: "paragraph", text: "Weather changes. Heavy rain can reveal leaks. Power may trip. A neighbour may need access. Post may arrive. Damp can appear in a closed room. A pest issue may start quietly. A lock may become stiff, or a cleaner may notice something unusual." },
          { type: "paragraph", text: "A local property check gives you visibility. It allows someone to visit the property, look for obvious issues, air the rooms, check key areas and send you a clear update. For absent owners, this can be a major relief." },
          { type: "paragraph", text: "A typical property check may include:" },
          {
            type: "list",
            items: [
              "External and internal visual inspection",
              "Doors, windows and shutters check",
              "Signs of leaks, damp or mould",
              "Basic electricity and water checks",
              "Airing the property",
              "Running taps and flushing toilets where appropriate",
              "Checking post or building notices",
              "Photos or short video updates",
              "Reporting anything that needs attention",
            ],
          },
          { type: "paragraph", text: "This is especially useful for owners who live abroad, visit only during school holidays, or have no family nearby. It is also useful between longer stays, between tenants, or before planned arrivals." },
          { type: "paragraph", text: "Local support should be practical, transparent and proportionate. You should know what is included, what costs extra, and how problems are reported. No one can promise that every issue will be prevented, but regular checks can help ensure the property is not left unnoticed for months." },
        ],
      },
    ],
    conclusion: [
      "A second home in Portugal should bring peace, not worry. With a clear routine before departure, sensible utility checks, good ventilation, secure access and reliable housekeeping, you can leave your property with more confidence.",
      "For owners who are abroad or only visit occasionally, local checks add another layer of reassurance. They help you stay informed about the condition of your home and make practical decisions before small issues become more stressful.",
      "CasaMinder provides calm, reliable property care for owners who live away, including property checks, keyholding, housekeeping coordination and arrival preparation across Lisbon, Setubal and surrounding areas.",
      "Book a CasaMinder property check and receive a clear update on your home's condition before your next visit.",
    ],
  },
  "property-care-vs-airbnb-management": {
    intro: [
      "When people hear property management, they often think immediately of Airbnb, guest bookings, cleaning between stays and short-term rental income. Those services can be useful for the right owner and the right property. But they are not the same as property care.",
      "CasaMinder is not primarily an Airbnb management company. Our core focus is owner-focused property care Portugal: looking after homes while owners are away, whether the property is rented, occasionally used, or not rented at all.",
      "This distinction matters. A second home, family apartment, investment property or occasional-use villa still needs attention even when there are no guests. Empty homes need checking. Keys need managing. Post needs collecting. Small problems need to be noticed. Rooms need airing. Cleaners and contractors sometimes need access. Owners who live abroad often need someone local they can trust.",
      "Airbnb management is about running a guest-facing rental operation. Property care is about protecting the owner's peace of mind and keeping the home looked after between visits.",
      "Both can be valuable. They simply solve different problems.",
    ],
    sections: [
      {
        heading: "What property care means",
        content: [
          { type: "paragraph", text: "Property care is a practical, owner-focused service for people who are not always near their property. It is designed for second-home owners, expats, landlords, foreign buyers, Portuguese owners living abroad and anyone who needs reliable local support." },
          { type: "paragraph", text: "At its simplest, property care means having someone check on the home when you cannot be there." },
          { type: "paragraph", text: "A property care visit may include checking doors and windows, looking for signs of leaks or damp, airing the property, checking electricity, running taps, flushing toilets, collecting post, inspecting balconies or terraces, and sending photos after the visit." },
          { type: "paragraph", text: "It may also include keyholding, housekeeping coordination, pre-arrival cleaning, access for contractors, meter readings, garden or pool coordination, and general owner support." },
          { type: "paragraph", text: "The purpose is not to turn the property into a rental business. The purpose is to make sure the home is not left unattended for long periods without any local visibility." },
          { type: "paragraph", text: "For many owners, this is especially useful because they only visit Portugal a few times a year. They may own a home in Lisbon, Setubal, Sesimbra, Azeitao, Montijo, Alcochete or the surrounding areas, but live in the UK, Ireland, France, Germany, the Netherlands, the US or elsewhere. They may not have family nearby. They may not want to keep asking neighbours for favours. They may simply want a structured, professional way to know that the property is safe, clean and ready when needed." },
          { type: "paragraph", text: "This is where absent owner property services are valuable. They provide eyes on the ground without taking control away from the owner." },
          { type: "paragraph", text: "Good property care is calm, practical and transparent. It should not create unnecessary work or pressure. It should help the owner understand the condition of the home and respond sensibly when something needs attention." },
        ],
      },
      {
        heading: "What Airbnb management usually includes",
        content: [
          { type: "paragraph", text: "Airbnb management is a different type of service. It is focused on generating and managing short-term rental bookings." },
          { type: "paragraph", text: "A typical Airbnb management company may help with listing creation, photography, pricing, guest messaging, check-in and check-out, cleaning between stays, linen, guest support, review management and calendar coordination. Some companies also list properties across multiple booking platforms, not only Airbnb." },
          { type: "paragraph", text: "This can be very useful for owners who actively want to rent their property to short-stay guests. Running a short-term rental can be time-consuming, especially if the owner is abroad. Guests may have questions late at night. Cleaners need to be scheduled quickly. Check-ins must be organised. Issues must be handled during the stay. Reviews need attention. Pricing may need adjusting depending on season and demand." },
          { type: "paragraph", text: "Airbnb management is therefore more operational and guest-facing than standard property care." },
          { type: "paragraph", text: "It is also usually more commercially structured. Many short-term rental management services charge a percentage of rental income. Their work is tied to occupancy, guest turnover and revenue performance." },
          { type: "paragraph", text: "Property care, by contrast, is usually more owner-facing. It can be based on monthly visits, keyholding, housekeeping, inspection reports and practical support. It is useful even when the property produces no rental income at all." },
          { type: "paragraph", text: "This is why it is important not to confuse the two." },
          { type: "paragraph", text: "An Airbnb manager asks: How do we run this property for guests?" },
          { type: "paragraph", text: "A property care provider asks: How do we look after this home while the owner is away?" },
          { type: "paragraph", text: "Both questions matter. They just serve different needs." },
          { type: "paragraph", text: "CasaMinder can support rental readiness where appropriate, but that is not the heart of the business. Our main purpose is to look after the property for the owner." },
        ],
      },
      {
        heading: "Which owners need property care even when they do not rent",
        content: [
          { type: "paragraph", text: "Many owners need property care even if they have no intention of using Airbnb." },
          { type: "paragraph", text: "A family may own an apartment in Portugal that they use during school holidays. A Portuguese owner may live abroad but keep a family home in Setubal. An expat may travel often and leave a property empty for several weeks at a time. A landlord may have gaps between tenants. A retired couple may spend part of the year in Portugal and part elsewhere." },
          { type: "paragraph", text: "None of these situations necessarily involve short-term rental. But they all involve a property being empty or lightly used." },
          { type: "paragraph", text: "Empty homes can develop issues quietly. A small leak under a sink may go unnoticed. A room may become damp because there is no ventilation. A fuse may trip. A fridge may stop working. Post may build up. A cleaner may need access. A neighbour may report a problem. A storm may affect shutters, windows or outdoor furniture." },
          { type: "paragraph", text: "These are not dramatic situations, but they are exactly the kinds of things that become more stressful when the owner is far away." },
          { type: "paragraph", text: "Property care is especially useful for:" },
          {
            type: "list",
            items: [
              "Owners who live outside Portugal",
              "Owners who visit only a few times per year",
              "Second-home owners who want the property checked between visits",
              "Landlords with occasional empty periods",
              "Owners who need secure keyholding",
              "Owners who need cleaning before arrival",
              "Owners who rely on local contractors",
              "Owners who do not want to depend on friends or neighbours",
              "Owners of older properties or homes in coastal areas",
              "Owners who want photos and clear updates after each visit",
            ],
          },
          { type: "paragraph", text: "For example, someone searching for keyholding Lisbon may not need rental management at all. They may simply need a trusted local contact who can hold keys securely, open the property for a cleaner, allow access to a plumber, or prepare the home before arrival." },
          { type: "paragraph", text: "Likewise, someone looking for home watch Lisbon may want regular property checks, not guest bookings. They want reassurance that their home has been visited, aired and visually inspected." },
          { type: "paragraph", text: "In Setubal and the surrounding region, the same logic applies. Owners may search for property management Setubal, but what they actually need is not always full rental management. Sometimes they need property checks, housekeeping, access coordination and practical support while they are away." },
          { type: "paragraph", text: "This is the gap CasaMinder is designed to fill." },
        ],
      },
      {
        heading: "When rental readiness support makes sense",
        content: [
          { type: "paragraph", text: "There are situations where rental support does make sense." },
          { type: "paragraph", text: "An owner may not want full Airbnb management, but may want help preparing a property for occasional guests, family stays, mid-term tenants or compliant rental use. In that case, rental readiness support can be useful." },
          { type: "paragraph", text: "Rental readiness is not the same as promising bookings or managing a full short-term rental business. It is about preparing the home so it is clean, organised, accessible and presentable." },
          { type: "paragraph", text: "This may include checking furniture condition, arranging a deep clean, preparing linen, checking appliances, confirming key access, taking basic property photos, coordinating minor repairs, or creating a simple arrival checklist." },
          { type: "paragraph", text: "For some owners, this support may come before a family visit. For others, it may help between longer-term tenants. For others, it may be the first step before deciding whether to work with a dedicated rental manager." },
          { type: "paragraph", text: "CasaMinder may support rental readiness as an optional service. However, rental activity is always subject to the owner's own responsibilities, local rules and professional advice where needed. CasaMinder does not provide legal, tax or licensing advice." },
          { type: "paragraph", text: "This light distinction is important. In Portugal, rental rules, local accommodation requirements and owner obligations can vary depending on the property and location. Any owner considering short-term rental should check the relevant requirements with appropriate professionals or local authorities." },
          { type: "paragraph", text: "From a property care perspective, our role is practical: keeping the home checked, clean, accessible and ready for the use the owner has chosen." },
        ],
      },
      {
        heading: "How to choose the right type of support",
        content: [
          { type: "paragraph", text: "The best service depends on how you use your property." },
          { type: "paragraph", text: "Start by asking a few simple questions." },
          { type: "paragraph", text: "Do you want to earn income from short-term guests? If yes, you may need Airbnb or short-term rental management, especially if you want support with pricing, guest messages, check-ins, cleaning between stays and booking platforms." },
          { type: "paragraph", text: "Do you mainly use the property yourself? If yes, you probably need property care, keyholding, housekeeping and pre-arrival preparation more than Airbnb management." },
          { type: "paragraph", text: "Is the property empty for long periods? If yes, regular property checks can help you stay informed and spot visible issues earlier." },
          { type: "paragraph", text: "Do you live abroad? If yes, absent owner support is likely to be useful, even if you have friendly neighbours nearby." },
          { type: "paragraph", text: "Do you need someone to coordinate access? If yes, keyholding and local supplier access may be more important than guest management." },
          { type: "paragraph", text: "Do you have gaps between tenants? If yes, you may need inspection, cleaning, maintenance coordination and meter readings between occupancies." },
          { type: "paragraph", text: "Do you want both owner support and rental support? If yes, choose a service that is honest about what it does well and what may require specialist partners." },
          { type: "paragraph", text: "The right provider should be clear about scope. They should explain what is included in routine checks, what is charged separately, how issues are reported, how keys are handled, and how quickly they can respond." },
          { type: "paragraph", text: "Avoid vague promises. No property care provider can guarantee that nothing will ever go wrong. What they can do is provide regular visibility, practical support and clear communication when something needs attention." },
          { type: "paragraph", text: "For many second-home owners, that is exactly what is missing." },
        ],
      },
    ],
    conclusion: [
      "Property care and Airbnb management are related, but they are not the same.",
      "Airbnb management is designed for guest bookings and rental operations. Property care is designed for owners who want their home looked after while they are away.",
      "CasaMinder sits firmly in the second category. We provide calm, practical support for absent owners, second-home owners, expats, landlords and families with occasionally empty properties in Portugal.",
      "Rental readiness can be added when useful, but it is not the core offer. Our main role is to help you keep your property checked, aired, clean, accessible and ready for your next visit.",
      "If you own a property in Lisbon, Setubal or the surrounding areas and want local support without turning your home into a full rental operation, book a CasaMinder property check. We will review the property, provide a clear update and help you decide what level of care makes sense while you are away.",
    ],
  },
  "winter-empty-home-checks": {
    intro: [
      "Leaving a property empty for winter in Portugal needs a little more planning than many owners expect. While Portuguese winters are mild compared with northern Europe, they can still bring heavy rain, damp air, strong coastal winds, colder nights and long periods of humidity. For a home that is lived in every day, these conditions are usually manageable. For a home that is closed for weeks or months, small issues can develop quietly.",
      "This is especially true for second-home owners, expats, Portuguese owners living abroad and landlords with occasionally empty properties. Whether your home is in Lisbon, Setubal, Azeitao, Sesimbra, Almada, Montijo or nearby, a winter departure checklist can help you leave the property in a safer, cleaner and more controlled condition.",
      "This guide covers what to check before leaving your home empty for winter, and why regular local checks can be useful when you are not nearby.",
    ],
    sections: [
      {
        heading: "Damp and ventilation",
        content: [
          { type: "paragraph", text: "Damp is one of the main winter concerns for empty homes in Portugal. It is not always caused by a major building problem. Sometimes it appears simply because the property is closed, the air is still, and rooms are not being warmed or ventilated." },
          { type: "paragraph", text: "Bathrooms, wardrobes, storage rooms, north-facing bedrooms and older properties are often more vulnerable. Coastal areas can also feel humid for long periods, especially near the river, sea or shaded streets." },
          { type: "paragraph", text: "Before leaving, walk through each room and look for early warning signs. Check corners, ceilings, window frames, wardrobes, bathroom walls and areas behind furniture. If you already see mould, water marks or a musty smell, deal with it before closing the property." },
          { type: "paragraph", text: "Helpful steps include:" },
          {
            type: "list",
            items: [
              "Leave internal doors open where possible",
              "Keep wardrobe doors slightly open if the room is prone to damp",
              "Move furniture slightly away from external walls",
              "Avoid leaving damp towels, bath mats or laundry",
              "Use moisture absorbers in enclosed spaces",
              "Clean bathrooms thoroughly before departure",
              "Make sure windows are properly closed but rooms are not packed too tightly",
              "Ask someone local to air the property during longer absences",
            ],
          },
          { type: "paragraph", text: "Good property care Portugal is often about simple, regular attention. A home does not need to be occupied every day to be cared for, but it should not be left completely unchecked for the whole winter." },
        ],
      },
      {
        heading: "Water shutoff or checks",
        content: [
          { type: "paragraph", text: "Water is one of the areas owners should think about carefully before leaving a property empty. A small leak can cause damage if nobody notices it for several weeks. In apartments, it can also affect neighbours or common areas." },
          { type: "paragraph", text: "Depending on your property, you may decide to turn off the mains water supply before leaving. This can reduce the risk of leaks while the property is empty. However, it is not always suitable for every home, especially if irrigation, heating systems, boilers, appliances or other systems need water access." },
          { type: "paragraph", text: "If you are not sure what is appropriate, ask a qualified professional or someone who understands the property setup. The important point is to make a clear decision rather than simply locking up and hoping everything remains fine." },
          { type: "paragraph", text: "Before you leave:" },
          {
            type: "list",
            items: [
              "Check under sinks",
              "Look around toilets and bidets",
              "Check the boiler or water heater area",
              "Look near washing machine and dishwasher connections",
              "Make sure taps are fully closed",
              "Check outdoor taps and hoses",
              "Look for stains, swelling, damp smells or dripping",
              "Confirm where the main water shutoff is located",
              "Make sure your local contact knows how to turn the water off if needed",
            ],
          },
          { type: "paragraph", text: "If you prefer to keep the water on, regular checks become more important. This is where absent owner property services can be helpful, especially for owners who live abroad or only return to Portugal a few times a year." },
        ],
      },
      {
        heading: "Drains, taps and toilets",
        content: [
          { type: "paragraph", text: "Drains, taps and toilets are easy to forget before leaving, but they matter in an empty home. Bad smells, slow drains, dry traps and small plumbing issues can become unpleasant by the time you return." },
          { type: "paragraph", text: "Before departure, run taps briefly and check that water drains properly. Flush toilets and make sure they refill correctly. Look for constant running water, weak flushing, slow drainage or unusual smells." },
          { type: "paragraph", text: "Kitchen sinks, bathroom basins, showers and utility areas should be left clean and free of food waste, hair or residue. Do not leave standing water in buckets, plant trays or unused containers." },
          { type: "paragraph", text: "A simple plumbing check should include:" },
          {
            type: "list",
            items: [
              "Run each tap and check drainage",
              "Flush each toilet",
              "Check for slow drains",
              "Clean shower and sink drains",
              "Remove food waste from kitchen areas",
              "Check for smells from unused bathrooms",
              "Make sure toilet lids are closed",
              "Ask your property checker to run taps and flush toilets during longer absences, if appropriate",
            ],
          },
          { type: "paragraph", text: "These small steps are part of sensible second home care Portugal. They are not complicated, but they help keep the home fresher and easier to reopen after winter." },
        ],
      },
      {
        heading: "Post and access",
        content: [
          { type: "paragraph", text: "A full post box is one of the clearest signs that a property is empty. It can also mean you miss important letters from utility providers, the condominium, the bank, local services or suppliers." },
          { type: "paragraph", text: "Before leaving for winter, decide how post will be handled. If you have a trusted neighbour, friend or local property care provider, ask them to collect it regularly. If important documents are expected, make sure someone can photograph or forward them to you." },
          { type: "paragraph", text: "Access is equally important. Winter is when unexpected issues are more likely to need attention: a leak after heavy rain, a blown fuse, a building notice, a contractor visit or a neighbour needing urgent access." },
          { type: "paragraph", text: "Before departure, make sure:" },
          {
            type: "list",
            items: [
              "A trusted person has a spare key",
              "Keys are clearly organised",
              "Alarm instructions are written down if needed",
              "Your local contact knows how to access the building",
              "Condominium contacts are available",
              "Emergency contacts are easy to find",
              "Contractors can be let in if required",
              "You know who can check the property after bad weather",
            ],
          },
          { type: "paragraph", text: "For owners in the capital, property checks Lisbon can be especially useful because many homes are in shared buildings. Notices, access issues, maintenance works and neighbour concerns often need someone local to respond or at least keep the owner informed." },
        ],
      },
      {
        heading: "Outdoor areas",
        content: [
          { type: "paragraph", text: "Outdoor areas need attention before winter, especially in properties with terraces, balconies, gardens, pools, gates or roof access. Strong rain and wind can move furniture, damage plants, block drains or expose weak points around windows and doors." },
          { type: "paragraph", text: "Even a small balcony should be checked before leaving. Remove loose items, secure furniture, check plant pots and make sure drains are clear. On terraces, look for leaves, debris or anything that could block water flow during heavy rain." },
          { type: "paragraph", text: "For villas or townhouses, check gates, external lights, gutters, garden furniture, irrigation systems, pool equipment and sheds. If you have trees or tall plants near the house, consider whether they need pruning before the wetter months." },
          { type: "paragraph", text: "Before leaving:" },
          {
            type: "list",
            items: [
              "Secure outdoor furniture",
              "Remove light objects from balconies and terraces",
              "Clear leaves and debris from drains where accessible",
              "Check external doors, shutters and locks",
              "Store cushions and fabrics indoors",
              "Check outdoor taps and hoses",
              "Review garden or pool maintenance arrangements",
              "Ask someone to check outside areas after storms",
            ],
          },
          { type: "paragraph", text: "Outdoor checks are particularly important in coastal or exposed areas around Setubal, Sesimbra, Troia, Almada and parts of Lisbon. Winter weather may be mild, but wind and rain can still create problems for unattended homes." },
        ],
      },
      {
        heading: "Cleaning before departure",
        content: [
          { type: "paragraph", text: "A clean property is easier to leave and easier to reopen. It also reduces the chance of pests, odours and unpleasant surprises when you return." },
          { type: "paragraph", text: "Before leaving, remove rubbish, empty food waste, clean surfaces and check cupboards. Do not leave open packets of food, fruit, crumbs or bins. Clean the fridge and decide whether it will stay on or be switched off. If switching it off, leave the door open to avoid smells." },
          { type: "paragraph", text: "Bathrooms should be cleaned and dried as much as possible. Towels, bedding and laundry should be fully dry before storage. Damp fabrics left in a closed room over winter can quickly become musty." },
          { type: "paragraph", text: "If you use the home only a few times a year, consider arranging a departure clean and a pre-arrival clean. Reliable housekeeping Setubal or Lisbon support can make a big difference, especially if you travel with family or arrive late after a flight." },
          { type: "paragraph", text: "Before leaving:" },
          {
            type: "list",
            items: [
              "Empty bins",
              "Remove perishables",
              "Clean fridge and kitchen surfaces",
              "Check cupboards for open food",
              "Wash and dry linen properly",
              "Store bedding in a dry place",
              "Clean bathrooms",
              "Vacuum or sweep floors",
              "Remove damp towels and bath mats",
              "Book a pre-arrival clean if needed",
            ],
          },
          { type: "paragraph", text: "Winter cleaning is not only about appearance. It is part of keeping the property fresh, hygienic and ready for the next visit." },
        ],
      },
      {
        heading: "Why winter checks matter more for empty homes",
        content: [
          { type: "paragraph", text: "Winter checks matter because empty homes are quieter, colder and less ventilated. Nobody is opening windows, noticing smells, spotting water marks, collecting post or realising that something has changed." },
          { type: "paragraph", text: "A regular property check gives you visibility while you are away. It does not guarantee that nothing will happen, but it means the property is not left unnoticed for months." },
          { type: "paragraph", text: "A winter property check may include airing the home, checking for damp or leaks, looking at windows and doors, inspecting outdoor areas, checking post, running taps, flushing toilets and sending photos or notes to the owner." },
          { type: "paragraph", text: "For second-home owners and absent owners, this can reduce stress. You do not have to wonder whether everything is fine. You have a clear update from someone who has been there." },
        ],
      },
    ],
    conclusion: [
      "CasaMinder provides calm, practical property care for owners who live away, including winter property checks, keyholding, housekeeping coordination and arrival preparation across Lisbon, Setubal and surrounding areas.",
      "Before leaving your Portuguese home empty this winter, book a CasaMinder property check and receive a clear, practical update on what your property may need while you are away.",
    ],
  },
};

function renderContentBlock(block: GuideContentBlock) {
  if (block.type === "paragraph") {
    return <p key={block.text}>{block.text}</p>;
  }

  return (
    <ul key={block.items.join("|")} className="list-disc space-y-2 pl-6">
      {block.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.href.split("/").pop() as string }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((item) => item.href.endsWith(slug));

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.excerpt,
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = guides.find((item) => item.href.endsWith(slug));

  if (!guide) {
    notFound();
  }

  const article = guideArticles[slug];

  return (
    <main>
      <article className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-coastal">Guide</p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">{guide.title}</h1>
          <p className="mt-5 text-xl leading-8 text-muted">{guide.excerpt}</p>

          <div className="mt-10 rounded-3xl bg-white p-8 shadow-card">
            {article ? (
              <div className="space-y-8 text-muted">
                <div className="space-y-6 leading-8">
                  {article.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {article.sections.map((section) => (
                  <section key={section.heading} className="space-y-5">
                    <h2 className="font-serif text-3xl font-semibold text-charcoal">{section.heading}</h2>
                    <div className="space-y-5 leading-8">{section.content.map(renderContentBlock)}</div>
                  </section>
                ))}

                <section className="space-y-5 border-t border-stone-200 pt-8">
                  <h2 className="font-serif text-3xl font-semibold text-charcoal">Conclusion</h2>
                  <div className="space-y-5 leading-8">
                    {article.conclusion.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              <div className="space-y-6 leading-8 text-muted">
                <p>
                  This guide is a placeholder for CasaMinder&apos;s owner resources. It will be expanded with practical, location-aware advice for property care Portugal owners, including preparation checklists, maintenance coordination notes and home watch Lisbon considerations.
                </p>
                <p>
                  CasaMinder can help with property checks, keyholding, housekeeping, access coordination and clear photo updates, while specialist repairs and third-party supplier costs remain separately quoted.
                </p>
                <p>
                  Rental-related support is optional and depends on the owner&apos;s legal and compliance status. CasaMinder does not provide legal, tax, insurance or real estate brokerage advice.
                </p>
              </div>
            )}
          </div>

          <ButtonLink href="/contact" className="mt-8">
            Book a Property Check
          </ButtonLink>
        </div>
      </article>
    </main>
  );
}
