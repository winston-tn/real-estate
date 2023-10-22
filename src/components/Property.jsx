import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar, Spacer } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import DefaultImage from '../assets/images/houseplaceholder.png';


const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex direction="column" w="sm" cursor="pointer">
      <Image
        src={coverPhoto ? coverPhoto.url : DefaultImage}
        width={400}
        height={260}
        alt="house"
        style={{ width: "400px", height: "260px", objectFit: "cover" }}
      />
      <Box w="full" mt={2}>
        <Flex align="center">
          <Box mr={3} color="green.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text fontSize="lg" fontWeight="bold">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
          <Spacer />
          <Avatar size="sm" src={agency?.logo?.url} />
        </Flex>
        <Flex align="center" justify="space-between" w="2xs" color="blue.400">
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Text fontSize="lg">
          {title.length > 40 ? `${title.substring(0, 40)}...` : title}
        </Text>
      </Box>
    </Flex>
  </Link>
)


export default Property;

// const prop1 = {
//   "id": 3295319,
//   "ownerID": 2025878,
//   "userExternalID": "2025878",
//   "sourceID": 1,
//   "state": "active",
//   "_geoloc": {
//       "lat": 25.055795,
//       "lng": 55.201555
//   },
//   "geography": {
//       "lat": 25.055795,
//       "lng": 55.201555
//   },
//   "purpose": "for-rent",
//   "price": 5799,
//   "product": "superhot",
//   "productLabel": "default",
//   "productScore": 0,
//   "rentFrequency": "monthly",
//   "referenceNumber": "LM-1BHK-AP229-SHA604",
//   "permitNumber": null,
//   "projectNumber": null,
//   "title": "HIGH CLASS 1BHK ||  AMAZINGLY FURNISHED || AVAILABLE NOW !!!",
//   "title_l1": "شقة في لايا مانشون،الضاحية 15،قرية جميرا الدائرية 1 غرفة 5799 درهم - 6008858",
//   "title_l2": "位于朱美拉环形村(JVC)，JVC第15区，拉雅大厦 1 卧室的公寓 5799 AED - 6008858",
//   "title_l3": "Квартира в Джумейра Вилладж Серкл (ДЖВС)，JVC Дистрикт 15，Усадьба Лая, 1 спальня, 5799 AED - 6008858",
//   "externalID": "6008858",
//   "slug": "high-class-1bhk-amazingly-furnished-available-now-6008858",
//   "slug_l1": "high-class-1bhk-amazingly-furnished-available-now-6008858",
//   "slug_l2": "high-class-1bhk-amazingly-furnished-available-now-6008858",
//   "slug_l3": "high-class-1bhk-amazingly-furnished-available-now-6008858",
//   "location": [
//       {
//           "id": 1,
//           "level": 0,
//           "externalID": "5001",
//           "name": "UAE",
//           "name_l1": "الإمارات",
//           "name_l2": "阿联酋",
//           "name_l3": "ОАЭ",
//           "slug": "/uae",
//           "slug_l1": "/uae",
//           "slug_l2": "/uae",
//           "slug_l3": "/uae"
//       },
//       {
//           "id": 2,
//           "level": 1,
//           "externalID": "5002",
//           "name": "Dubai",
//           "name_l1": "دبي",
//           "name_l2": "迪拜",
//           "name_l3": "Дубай",
//           "slug": "/dubai",
//           "slug_l1": "/dubai",
//           "slug_l2": "/dubai",
//           "slug_l3": "/dubai"
//       },
//       {
//           "id": 59,
//           "level": 2,
//           "externalID": "5416",
//           "name": "Jumeirah Village Circle (JVC)",
//           "name_l1": "قرية جميرا الدائرية",
//           "name_l2": "朱美拉环形村(JVC)",
//           "name_l3": "Джумейра Вилладж Серкл (ДЖВС)",
//           "slug": "/dubai/jumeirah-village-circle-jvc",
//           "slug_l1": "/dubai/jumeirah-village-circle-jvc",
//           "slug_l2": "/dubai/jumeirah-village-circle-jvc",
//           "slug_l3": "/dubai/jumeirah-village-circle-jvc",
//           "type": "neighbourhood"
//       },
//       {
//           "id": 2757,
//           "level": 3,
//           "externalID": "11455",
//           "name": "JVC District 15",
//           "name_l1": "الضاحية 15",
//           "name_l2": "JVC第15区",
//           "name_l3": "JVC Дистрикт 15",
//           "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-15",
//           "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-15",
//           "slug_l2": "/dubai/jumeirah-village-circle-jvc/jvc-district-15",
//           "slug_l3": "/dubai/jumeirah-village-circle-jvc/jvc-district-15",
//           "type": "neighbourhood"
//       },
//       {
//           "id": 17405,
//           "level": 4,
//           "externalID": "13260",
//           "name": "Laya Mansion",
//           "name_l1": "لايا مانشون",
//           "name_l2": "拉雅大厦",
//           "name_l3": "Усадьба Лая",
//           "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-15/laya-mansion",
//           "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-15/laya-mansion",
//           "slug_l2": "/dubai/jumeirah-village-circle-jvc/jvc-district-15/laya-mansion",
//           "slug_l3": "/dubai/jumeirah-village-circle-jvc/jvc-district-15/laya-mansion",
//           "type": "condo-building"
//       }
//   ],
//   "category": [
//       {
//           "id": 1,
//           "level": 0,
//           "externalID": "1",
//           "name": "Residential",
//           "name_l1": "سكني",
//           "name_l2": "居住物业",
//           "name_l3": "Жилые",
//           "slug": "residential",
//           "slug_l1": "residential",
//           "slug_l2": "residential",
//           "slug_l3": "residential",
//           "nameSingular": "Residential",
//           "nameSingular_l1": "سكني",
//           "nameSingular_l2": "居住物业",
//           "nameSingular_l3": "Жилые"
//       },
//       {
//           "id": 2,
//           "level": 1,
//           "externalID": "4",
//           "name": "Apartments",
//           "name_l1": "شقق",
//           "name_l2": "公寓",
//           "name_l3": "Апартаменты",
//           "slug": "apartments",
//           "slug_l1": "apartments",
//           "slug_l2": "apartments",
//           "slug_l3": "apartments",
//           "nameSingular": "Apartment",
//           "nameSingular_l1": "شقة",
//           "nameSingular_l2": "公寓",
//           "nameSingular_l3": "Квартира"
//       }
//   ],
//   "createdAt": 1654330875,
//   "updatedAt": 1695879519,
//   "reactivatedAt": 1679989059.066979,
//   "rooms": 1,
//   "baths": 2,
//   "area": 67.7095936128,
//   "score": 75,
//   "score_l1": 75,
//   "score_l2": 75,
//   "score_l3": 75,
//   "coverPhoto": {
//       "id": 258657827,
//       "externalID": "123945969",
//       "title": null,
//       "orderIndex": 0,
//       "nimaScore": 9.682494409517858,
//       "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/258657827/bfc3270c58cd46b19ffed7dc927b2a61",
//       "main": true
//   },
//   "photoCount": 10,
//   "videoCount": 0,
//   "panoramaCount": 0,
//   "phoneNumber": {
//       "mobile": "+971586603604",
//       "phone": "+97145539027",
//       "whatsapp": "971545695868",
//       "phoneNumbers": [
//           "+97145539027"
//       ],
//       "mobileNumbers": [
//           "+971586603604"
//       ]
//   },
//   "contactName": "Sharyar",
//   "agency": {
//       "id": 29583084,
//       "objectID": 29583084,
//       "name": "Peace Full Vacation Homes",
//       "name_l1": "بيس فول لتأجير بيوت العطلات",
//       "name_l2": "Peace Full Vacation Homes",
//       "name_l3": "Peace Full Vacation Homes",
//       "externalID": "9945",
//       "product": "premium",
//       "productScore": 2,
//       "licenses": [
//           {
//               "number": "761913",
//               "authority": "DED"
//           }
//       ],
//       "logo": {
//           "id": 95887451,
//           "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/95887451/dd511fdbc2e84cbe9963123840177a97"
//       },
//       "slug": "peace-full-vacation-homes-9945",
//       "slug_l1": "peace-full-vacation-homes-9945",
//       "slug_l2": "peace-full-vacation-homes-9945",
//       "slug_l3": "peace-full-vacation-homes-9945",
//       "tr": 3,
//       "tier": 3,
//       "roles": [],
//       "active": true,
//       "createdAt": "2020-09-22T08:48:39+00:00",
//       "commercialNumber": null,
//       "shortNumber": null,
//       "performanceCohort": "overachieving"
//   },
//   "hash": "eb42c31",
//   "keywords": [
//       "تملك حر",
//       "مصعد",
//       "مفروش",
//       "ايجار جديد",
//       "مفروشة",
//       "مؤثثة",
//       "مودرن",
//       "جديدة",
//       "new",
//       "جديدة اول ساكن",
//       "مطبخ",
//       "تمليك حر",
//       "elevator",
//       "modern",
//       "حديثة",
//       "kitchen",
//       "freehold",
//       "furnished"
//   ],
//   "isVerified": true,
//   "verification": {
//       "updatedAt": 1695875419.125925,
//       "eligible": true,
//       "status": "verified",
//       "verifiedAt": 1695875413,
//       "trucheckedAt": 1695875413
//   },
//   "verifiedScore": 0,
//   "completionStatus": "completed",
//   "randBoostScore": 705,
//   "randBoostScore_l1": 579,
//   "randBoostScore_l2": 579,
//   "randBoostScore_l3": 579,
//   "floorPlanID": null,
//   "furnishingStatus": "furnished",
//   "extraFields": {},
//   "type": "property",
//   "ownerAgent": {
//       "externalID": "2025878",
//       "name": "Sharyar",
//       "name_l1": "Sharyar",
//       "name_l2": "Sharyar",
//       "name_l3": "Sharyar",
//       "user_image": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/390199724/74ad6bd19bda4823a9c2f6c7f873256e",
//       "user_image_id": 390199724,
//       "isTruBroker": false
//   },
//   "amenities": [
//       "Gym or Health Club",
//       "Lawn or Garden",
//       "Electricity Backup",
//       "Waste Disposal",
//       "Furnished",
//       "Sauna",
//       "Swimming Pool",
//       "Maintenance Staff",
//       "Security Staff",
//       "CCTV Security",
//       "24 Hours Concierge",
//       "Cleaning Services",
//       "Reception/Waiting Room",
//       "Balcony or Terrace",
//       "Barbeque Area",
//       "Lobby in Building",
//       "Double Glazed Windows",
//       "Centrally Air-Conditioned",
//       "Prayer Room",
//       "Broadband Internet",
//       "Satellite/Cable TV",
//       "Jacuzzi",
//       "Kids Play Area"
//   ],
//   "amenities_l1": [
//       "صالة رياضية أو نادي صحي",
//       "حديقة",
//       "نظام كهرباء احتياطي للطوارئ",
//       "مكبّ نفايات",
//       "مفروشة",
//       "ساونا",
//       "مسبح",
//       "خدمات صيانة",
//       "أمن و حماية",
//       "نظام كاميرات مراقبة",
//       "حراسة 24 ساعة",
//       "خدمات تنظيف",
//       "غرفة استقبال /انتظار",
//       "شرفة أو تراس",
//       "مكان مخصص للشواء",
//       "ردهة إستقبال",
//       "نوافذ زجاجية مزدوجة",
//       "نظام تبريد مركزي",
//       "غرفة صلاة",
//       "انترنت واسع النطاق",
//       "كابل قنوات تلفزيونية",
//       "جاكوزي",
//       "منطقة لعب للأطفال"
//   ],
//   "amenities_l2": [
//       "健身房或健身俱乐部",
//       "绿化",
//       "备用电力",
//       "垃圾处理",
//       "配备家具",
//       "汗蒸房",
//       "附近医院",
//       "清洁服务",
//       "全部楼层",
//       "闭路电视安全",
//       "24小时礼宾服务",
//       "清洁服务",
//       "桑拿",
//       "阳台",
//       "烧烤区",
//       "入户大堂",
//       "双层玻璃窗",
//       "中央空调",
//       "祈祷室",
//       "宽带网络",
//       "卫星电视/有线电视",
//       "按摩浴缸",
//       "儿童娱乐区"
//   ],
//   "amenities_l3": [
//       "Тренажерный зал или оздоровительный клуб",
//       "Газон или сад",
//       "Резервное электричество",
//       "Утилизация отходов",
//       "Меблированный",
//       "Сауна",
//       "Бассейн",
//       "Обслуживающий персонал",
//       "Сотрудники безопасности",
//       "Безопасность видеонаблюдения",
//       "Круглосуточный консьерж",
//       "Услуги по уборке",
//       "Прием/Зал ожидания",
//       "Балкон или терраса",
//       "Зона барбекю",
//       "Лобби в здании",
//       "Окна с двойным остеклением",
//       "Центральное кондиционирование",
//       "Молитвенная комната",
//       "Широкополосный интернет",
//       "Спутниковое/кабельное телевидение",
//       "Джакузи",
//       "Детская игровая площадка"
//   ],
//   "cityLevelScore": 1,
//   "indyScore": 705,
//   "indyScore_l1": 579,
//   "indyScore_l2": 579,
//   "indyScore_l3": 579,
//   "hasMatchingFloorPlans": false,
//   "photoIDs": [
//       258657827,
//       233256700,
//       383984638,
//       258724046,
//       221748056,
//       233256705,
//       258724048,
//       386920419,
//       233256708,
//       276573426
//   ],
//   "hidePrice": false,
//   "locationPurposeTier": 1,
//   "plotArea": null,
//   "objectID": "3295319",
//   "_highlightResult": {
//       "referenceNumber": {
//           "value": "LM-1BHK-AP229-SHA604",
//           "matchLevel": "none",
//           "matchedWords": []
//       },
//       "title": {
//           "value": "HIGH CLASS 1BHK ||  AMAZINGLY FURNISHED || AVAILABLE NOW !!!",
//           "matchLevel": "none",
//           "matchedWords": []
//       },
//       "title_l1": {
//           "value": "شقة في لايا مانشون،الضاحية 15،قرية جميرا الدائرية 1 غرفة 5799 درهم - 6008858",
//           "matchLevel": "none",
//           "matchedWords": []
//       },
//       "title_l2": {
//           "value": "位于朱美拉环形村(JVC)，JVC第15区，拉雅大厦 1 卧室的公寓 5799 AED - 6008858",
//           "matchLevel": "none",
//           "matchedWords": []
//       },
//       "title_l3": {
//           "value": "Квартира в Джумейра Вилладж Серкл (ДЖВС)，JVC Дистрикт 15，Усадьба Лая, 1 спальня, 5799 AED - 6008858",
//           "matchLevel": "none",
//           "matchedWords": []
//       },
//       "externalID": {
//           "value": "6008858",
//           "matchLevel": "none",
//           "matchedWords": []
//       },
//       "agency": {
//           "name": {
//               "value": "Peace Full Vacation Homes",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           "name_l1": {
//               "value": "بيس فول لتأجير بيوت العطلات",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           "name_l2": {
//               "value": "Peace Full Vacation Homes",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           "name_l3": {
//               "value": "Peace Full Vacation Homes",
//               "matchLevel": "none",
//               "matchedWords": []
//           }
//       },
//       "keywords": [
//           {
//               "value": "تملك حر",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "مصعد",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "مفروش",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "ايجار جديد",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "مفروشة",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "مؤثثة",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "مودرن",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "جديدة",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "new",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "جديدة اول ساكن",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "مطبخ",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "تمليك حر",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "elevator",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "modern",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "حديثة",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "kitchen",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "freehold",
//               "matchLevel": "none",
//               "matchedWords": []
//           },
//           {
//               "value": "furnished",
//               "matchLevel": "none",
//               "matchedWords": []
//           }
//       ]
//   }
// }
