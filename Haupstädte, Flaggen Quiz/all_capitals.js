const questions = [

{
        question: 'What is the capital of Argentina? 🇦🇷', 
        correctAnswer: 'Buenos Aires', 
        easyOptions: ['Buenos Aires', 'Montevideo', 'Santiago', 'Asunción'], 
        hardOptions: ['Buenos Aires', 'La Plata', 'Rosario', 'Córdoba'], 
        country: 'Argentina'
    },
    {
        question: 'What is the capital of Bolivia? 🇧🇴', 
        correctAnswer: 'Sucre', 
        easyOptions: ['Sucre', 'La Paz', 'Santa Cruz', 'Cochabamba'], 
        hardOptions: ['Sucre', 'Potosí', 'Oruro', 'Tarija'], 
        country: 'Bolivia'
    },
    {
        question: 'What is the capital of Brazil? 🇧🇷', 
        correctAnswer: 'Brasília', 
        easyOptions: ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Salvador'], 
        hardOptions: ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Belo Horizonte'], 
        country: 'Brazil'
    },
    {
        question: 'What is the capital of Chile? 🇨🇱', 
        correctAnswer: 'Santiago', 
        easyOptions: ['Santiago', 'Valparaíso', 'Concepción', 'La Serena'], 
        hardOptions: ['Santiago', 'Valparaíso', 'Antofagasta', 'Temuco'], 
        country: 'Chile'
    },
    {
        question: 'What is the capital of Colombia? 🇨🇴', 
        correctAnswer: 'Bogotá', 
        easyOptions: ['Bogotá', 'Medellín', 'Cali', 'Cartagena'], 
        hardOptions: ['Bogotá', 'Medellín', 'Cali', 'Bucaramanga'], 
        country: 'Colombia'
    },
    {
        question: 'What is the capital of Ecuador? 🇪🇨', 
        correctAnswer: 'Quito', 
        easyOptions: ['Quito', 'Guayaquil', 'Cuenca', 'Ambato'], 
        hardOptions: ['Quito', 'Guayaquil', 'Cuenca', 'Loja'], 
        country: 'Ecuador'
    },
    {
        question: 'What is the capital of Guyana? 🇬🇾', 
        correctAnswer: 'Georgetown', 
        easyOptions: ['Georgetown', 'New Amsterdam', 'Linden', 'Mabaruma'], 
        hardOptions: ['Georgetown', 'Linden', 'New Amsterdam', 'Bartica'], 
        country: 'Guyana'
    },
    {
        question: 'What is the capital of Paraguay? 🇵🇾', 
        correctAnswer: 'Asunción', 
        easyOptions: ['Asunción', 'Ciudad del Este', 'Encarnación', 'Pedro Juan Caballero'], 
        hardOptions: ['Asunción', 'Ciudad del Este', 'Encarnación', 'Alto Paraná'], 
        country: 'Paraguay'
    },
    {
        question: 'What is the capital of Peru? 🇵🇪', 
        correctAnswer: 'Lima', 
        easyOptions: ['Lima', 'Arequipa', 'Cusco', 'Trujillo'], 
        hardOptions: ['Lima', 'Arequipa', 'Cusco', 'Piura'], 
        country: 'Peru'
    },
    {
        question: 'What is the capital of Suriname? 🇸🇷', 
        correctAnswer: 'Paramaribo', 
        easyOptions: ['Paramaribo', 'Nieuw Nickerie', 'Moengo', 'Lelydorp'], 
        hardOptions: ['Paramaribo', 'Nieuw Nickerie', 'Moengo', 'Lelydorp'], 
        country: 'Suriname'
    },
    {
        question: 'What is the capital of Uruguay? 🇺🇾', 
        correctAnswer: 'Montevideo', 
        easyOptions: ['Montevideo', 'Salto', 'Paysandú', 'Maldonado'], 
        hardOptions: ['Montevideo', 'Salto', 'Paysandú', 'Colonia del Sacramento'], 
        country: 'Uruguay'
    },
    {
        question: 'What is the capital of Venezuela? 🇻🇪', 
        correctAnswer: 'Caracas', 
        easyOptions: ['Caracas', 'Maracaibo', 'Valencia', 'Barquisimeto'], 
        hardOptions: ['Caracas', 'Maracaibo', 'Valencia', 'Maturín'], 
        country: 'Venezuela'
    },
	{ 
        question: 'What is the capital of Algeria? 🇩🇿', 
        correctAnswer: 'Algiers', 
        easyOptions: ['Algiers', 'Cairo', 'Tunis', 'Rabat'], 
        hardOptions: ['Algiers', 'Oran', 'Constantine', 'Annaba'], 
        country: 'Algeria'
    },
    { 
        question: 'What is the capital of Angola? 🇦🇴', 
        correctAnswer: 'Luanda', 
        easyOptions: ['Luanda', 'Kinshasa', 'Lagos', 'Nairobi'], 
        hardOptions: ['Luanda', 'Huambo', 'Lubango', 'Benguela'], 
        country: 'Angola'
    },
    { 
        question: 'What is the capital of Benin? 🇧🇯', 
        correctAnswer: 'Porto-Novo', 
        easyOptions: ['Porto-Novo', 'Lagos', 'Accra', 'Ouagadougou'], 
        hardOptions: ['Porto-Novo', 'Cotonou', 'Parakou', 'Djougou'], 
        country: 'Benin'
    },
    { 
        question: 'What is the capital of Botswana? 🇧🇼', 
        correctAnswer: 'Gaborone', 
        easyOptions: ['Gaborone', 'Pretoria', 'Harare', 'Lusaka'], 
        hardOptions: ['Gaborone', 'Francistown', 'Molepolole', 'Selebi-Phikwe'], 
        country: 'Botswana'
    },
    { 
        question: 'What is the capital of Burkina Faso? 🇧🇫', 
        correctAnswer: 'Ouagadougou', 
        easyOptions: ['Ouagadougou', 'Accra', 'Lomé', 'Cotonou'], 
        hardOptions: ['Ouagadougou', 'Bobo-Dioulasso', 'Koudougou', 'Fada N\'Gourma'], 
        country: 'Burkina Faso'
    },
    { 
        question: 'What is the capital of Burundi? 🇧🇮', 
        correctAnswer: 'Gitega', 
        easyOptions: ['Gitega', 'Kigali', 'Bujumbura', 'Kampala'], 
        hardOptions: ['Gitega', 'Bujumbura', 'Ngozi', 'Rutana'], 
        country: 'Burundi'
    },
    { 
        question: 'What is the capital of Cabo Verde? 🇨🇻', 
        correctAnswer: 'Praia', 
        easyOptions: ['Praia', 'Banjul', 'Dakar', 'Accra'], 
        hardOptions: ['Praia', 'Mindelo', 'Santa Maria', 'São Filipe'], 
        country: 'Cabo Verde'
    },
    { 
        question: 'What is the capital of Cameroon? 🇨🇲', 
        correctAnswer: 'Yaoundé', 
        easyOptions: ['Yaoundé', 'Douala', 'Libreville', 'Accra'], 
        hardOptions: ['Yaoundé', 'Douala', 'Bafoussam', 'Garoua'], 
        country: 'Cameroon'
    },
    { 
        question: 'What is the capital of Central African Republic? 🇨🇫', 
        correctAnswer: 'Bangui', 
        easyOptions: ['Bangui', 'Libreville', 'Kinshasa', 'N\'Djamena'], 
        hardOptions: ['Bangui', 'Bimbo', 'Berbérati', 'Kaga-Bandoro'], 
        country: 'Central African Republic'
    },
    { 
        question: 'What is the capital of Chad? 🇹🇩', 
        correctAnswer: 'N\'Djamena', 
        easyOptions: ['N\'Djamena', 'Khartoum', 'Lagos', 'Yaoundé'], 
        hardOptions: ['N\'Djamena', 'Moundou', 'Sarh', 'Abéché'], 
        country: 'Chad'
    },
    { 
        question: 'What is the capital of Comoros? 🇰🇲', 
        correctAnswer: 'Moroni', 
        easyOptions: ['Moroni', 'Antananarivo', 'Port Louis', 'Dar es Salaam'], 
        hardOptions: ['Moroni', 'Mitsamiouli', 'Moya', 'Hahaya'], 
        country: 'Comoros'
    },
    { 
        question: 'What is the capital of the Democratic Republic of Congo? 🇨🇩', 
        correctAnswer: 'Kinshasa', 
        easyOptions: ['Kinshasa', 'Brazzaville', 'Lagos', 'Nairobi'], 
        hardOptions: ['Kinshasa', 'Lubumbashi', 'Goma', 'Kisangani'], 
        country: 'Congo, Democratic Republic of the'
    },
    { 
        question: 'What is the capital of the Republic of Congo? 🇨🇬', 
        correctAnswer: 'Brazzaville', 
        easyOptions: ['Brazzaville', 'Kinshasa', 'Lagos', 'Yaoundé'], 
        hardOptions: ['Brazzaville', 'Pointe-Noire', 'Dolisie', 'Oyo'], 
        country: 'Congo, Republic of the'
    },
    { 
        question: 'What is the capital of Djibouti? 🇩🇯', 
        correctAnswer: 'Djibouti', 
        easyOptions: ['Djibouti', 'Addis Ababa', 'Asmara', 'Nairobi'], 
        hardOptions: ['Djibouti', 'Ali Sabieh', 'Tadjoura', 'Obock'], 
        country: 'Djibouti'
    },
    { 
        question: 'What is the capital of Egypt? 🇪🇬', 
        correctAnswer: 'Cairo', 
        easyOptions: ['Cairo', 'Rabat', 'Tunis', 'Beirut'], 
        hardOptions: ['Cairo', 'Alexandria', 'Giza', 'Port Said'], 
        country: 'Egypt'
    },
    { 
        question: 'What is the capital of Equatorial Guinea? 🇲🇱', 
        correctAnswer: 'Malabo', 
        easyOptions: ['Malabo', 'Libreville', 'Banjul', 'Yaoundé'], 
        hardOptions: ['Malabo', 'Bata', 'Evinayong', 'Oyala'], 
        country: 'Equatorial Guinea'
    },
    { 
        question: 'What is the capital of Eritrea? 🇪🇷', 
        correctAnswer: 'Asmara', 
        easyOptions: ['Asmara', 'Addis Ababa', 'Djibouti', 'Khartoum'], 
        hardOptions: ['Asmara', 'Keren', 'Mekele', 'Massawa'], 
        country: 'Eritrea'
    },
    { 
        question: 'What is the capital of Eswatini? 🇸🇿', 
        correctAnswer: 'Mbabane', 
        easyOptions: ['Mbabane', 'Gaborone', 'Pretoria', 'Johannesburg'], 
        hardOptions: ['Mbabane', 'Lobamba', 'Manzini', 'Nhlangano'], 
        country: 'Eswatini'
    },
    { 
        question: 'What is the capital of Ethiopia? 🇪🇹', 
        correctAnswer: 'Addis Ababa', 
        easyOptions: ['Addis Ababa', 'Nairobi', 'Kampala', 'Asmara'], 
        hardOptions: ['Addis Ababa', 'Dire Dawa', 'Mekele', 'Hawassa'], 
        country: 'Ethiopia'
    },
    { 
        question: 'What is the capital of Gabon? 🇬🇦', 
        correctAnswer: 'Libreville', 
        easyOptions: ['Libreville', 'Porto-Novo', 'Yaoundé', 'Brazzaville'], 
        hardOptions: ['Libreville', 'Franceville', 'Omboué', 'Tchibanga'], 
        country: 'Gabon'
    },
    { 
        question: 'What is the capital of Gambia? 🇲🇱', 
        correctAnswer: 'Banjul', 
        easyOptions: ['Banjul', 'Dakar', 'Freetown', 'Monrovia'], 
        hardOptions: ['Banjul', 'Serekunda', 'Brikama', 'Mansakonko'], 
        country: 'Gambia'
    },
    { 
        question: 'What is the capital of Ghana? 🇬🇭', 
        correctAnswer: 'Accra', 
        easyOptions: ['Accra', 'Lagos', 'Abuja', 'Monrovia'], 
        hardOptions: ['Accra', 'Kumasi', 'Tamale', 'Takoradi'], 
        country: 'Ghana'
    },
      { 
        question: 'What is the capital of Guinea? 🇬🇳', 
        correctAnswer: 'Conakry', 
        easyOptions: ['Conakry', 'Dakar', 'Monrovia', 'Abuja'], 
        hardOptions: ['Conakry', 'Kankan', 'Nzérékoré', 'Kindia'], 
        country: 'Guinea'
    },
    { 
        question: 'What is the capital of Ivory Coast? 🇨🇮', 
        correctAnswer: 'Yamoussoukro', 
        easyOptions: ['Yamoussoukro', 'Accra', 'Lagos', 'Abuja'], 
        hardOptions: ['Yamoussoukro', 'Abidjan', 'San Pedro', 'Bouaké'], 
        country: 'Ivory Coast'
    },
    { 
        question: 'What is the capital of Kenya? 🇰🇪', 
        correctAnswer: 'Nairobi', 
        easyOptions: ['Nairobi', 'Dar es Salaam', 'Kampala', 'Addis Ababa'], 
        hardOptions: ['Nairobi', 'Mombasa', 'Kisumu', 'Eldoret'], 
        country: 'Kenya'
    },
    { 
        question: 'What is the capital of Lesotho? 🇱🇸', 
        correctAnswer: 'Maseru', 
        easyOptions: ['Maseru', 'Pretoria', 'Gaborone', 'Mbabane'], 
        hardOptions: ['Maseru', 'Teyateyaneng', 'Leribe', 'Hlotse'], 
        country: 'Lesotho'
    },
    { 
        question: 'What is the capital of Liberia? 🇱🇸', 
        correctAnswer: 'Monrovia', 
        easyOptions: ['Monrovia', 'Freetown', 'Accra', 'Abuja'], 
        hardOptions: ['Monrovia', 'Gbarnga', 'Buchanan', 'Zwedru'], 
        country: 'Liberia'
    },
    { 
        question: 'What is the capital of Libya? 🇱🇾', 
        correctAnswer: 'Tripoli', 
        easyOptions: ['Tripoli', 'Cairo', 'Tunis', 'Algiers'], 
        hardOptions: ['Tripoli', 'Benghazi', 'Misrata', 'Sabha'], 
        country: 'Libya'
    },
    { 
        question: 'What is the capital of Madagascar? 🇲🇬', 
        correctAnswer: 'Antananarivo', 
        easyOptions: ['Antananarivo', 'Port Louis', 'Moroni', 'Dar es Salaam'], 
        hardOptions: ['Antananarivo', 'Toamasina', 'Fianarantsoa', 'Mahajanga'], 
        country: 'Madagascar'
    },
    { 
        question: 'What is the capital of Malawi? 🇲🇼', 
        correctAnswer: 'Lilongwe', 
        easyOptions: ['Lilongwe', 'Lusaka', 'Dar es Salaam', 'Harare'], 
        hardOptions: ['Lilongwe', 'Blantyre', 'Mzuzu', 'Zomba'], 
        country: 'Malawi'
    },
    { 
        question: 'What is the capital of Mali? 🇲🇱', 
        correctAnswer: 'Bamako', 
        easyOptions: ['Bamako', 'Ouagadougou', 'Abuja', 'Accra'], 
        hardOptions: ['Bamako', 'Sikasso', 'Kangaba', 'Gao'], 
        country: 'Mali'
    },
    { 
        question: 'What is the capital of Mauritania? 🇲🇷', 
        correctAnswer: 'Nouakchott', 
        easyOptions: ['Nouakchott', 'Rabat', 'Bamako', 'Tunis'], 
        hardOptions: ['Nouakchott', 'Nouadhibou', 'Atar', 'Kaédi'], 
        country: 'Mauritania'
    },
    { 
        question: 'What is the capital of Mauritius? 🇲🇺', 
        correctAnswer: 'Port Louis', 
        easyOptions: ['Port Louis', 'Antananarivo', 'Victoria', 'Male'], 
        hardOptions: ['Port Louis', 'Curepipe', 'Vacoas', 'Quatre Bornes'], 
        country: 'Mauritius'
    },
    { 
        question: 'What is the capital of Morocco? 🇲🇦', 
        correctAnswer: 'Rabat', 
        easyOptions: ['Rabat', 'Casablanca', 'Algiers', 'Tunis'], 
        hardOptions: ['Rabat', 'Fes', 'Marrakech', 'Tangier'], 
        country: 'Morocco'
    },
    { 
        question: 'What is the capital of Mozambique? 🇲🇿', 
        correctAnswer: 'Maputo', 
        easyOptions: ['Maputo', 'Lusaka', 'Harare', 'Dar es Salaam'], 
        hardOptions: ['Maputo', 'Beira', 'Nampula', 'Tete'], 
        country: 'Mozambique'
    },
    { 
        question: 'What is the capital of Namibia? 🇳🇦', 
        correctAnswer: 'Windhoek', 
        easyOptions: ['Windhoek', 'Gaborone', 'Pretoria', 'Cape Town'], 
        hardOptions: ['Windhoek', 'Swakopmund', 'Rundu', 'Oshakati'], 
        country: 'Namibia'
    },
    { 
        question: 'What is the capital of Niger? 🇳🇪', 
        correctAnswer: 'Niamey', 
        easyOptions: ['Niamey', 'Ouagadougou', 'Abuja', 'Bamako'], 
        hardOptions: ['Niamey', 'Zinder', 'Maradi', 'Agadez'], 
        country: 'Niger'
    },
    { 
        question: 'What is the capital of Nigeria? 🇳🇬', 
        correctAnswer: 'Abuja', 
        easyOptions: ['Abuja', 'Lagos', 'Accra', 'Kinshasa'], 
        hardOptions: ['Abuja', 'Lagos', 'Kano', 'Port Harcourt'], 
        country: 'Nigeria'
    },
    { 
        question: 'What is the capital of Rwanda? 🇷🇼', 
        correctAnswer: 'Kigali', 
        easyOptions: ['Kigali', 'Bujumbura', 'Kampala', 'Addis Ababa'], 
        hardOptions: ['Kigali', 'Butare', 'Gisenyi', 'Musanze'], 
        country: 'Rwanda'
    },
    { 
        question: 'What is the capital of São Tomé and Príncipe? 🇸🇹', 
        correctAnswer: 'São Tomé', 
        easyOptions: ['São Tomé', 'Banjul', 'Libreville', 'Lomé'], 
        hardOptions: ['São Tomé', 'Santo Amaro', 'Angola', 'Cacuaco'], 
        country: 'São Tomé and Príncipe'
    },
    { 
        question: 'What is the capital of Senegal? 🇸🇳', 
        correctAnswer: 'Dakar', 
        easyOptions: ['Dakar', 'Banjul', 'Conakry', 'Accra'], 
        hardOptions: ['Dakar', 'Thiès', 'Saint-Louis', 'Ziguinchor'], 
        country: 'Senegal'
    },
    { 
        question: 'What is the capital of Seychelles? 🇸🇨', 
        correctAnswer: 'Victoria', 
        easyOptions: ['Victoria', 'Port Louis', 'Moroni', 'Malé'], 
        hardOptions: ['Victoria', 'Beau Vallon', 'Anse Royale', 'La Digue'], 
        country: 'Seychelles'
    },
    { 
        question: 'What is the capital of Sierra Leone? 🇸🇱', 
        correctAnswer: 'Freetown', 
        easyOptions: ['Freetown', 'Monrovia', 'Accra', 'Banjul'], 
        hardOptions: ['Freetown', 'Bo', 'Kenema', 'Makeni'], 
        country: 'Sierra Leone'
    },
    { 
        question: 'What is the capital of Somalia? 🇸🇴', 
        correctAnswer: 'Mogadishu', 
        easyOptions: ['Mogadishu', 'Nairobi', 'Addis Ababa', 'Kampala'], 
        hardOptions: ['Mogadishu', 'Hargeisa', 'Kismayo', 'Baidoa'], 
        country: 'Somalia'
    },
    { 
        question: 'What is the capital of South Africa? 🇿🇦', 
        correctAnswer: 'Pretoria', 
        easyOptions: ['Pretoria', 'Cape Town', 'Johannesburg', 'Durban'], 
        hardOptions: ['Pretoria', 'Bloemfontein', 'Port Elizabeth', 'East London'], 
        country: 'South Africa'
    },    { 
        question: 'What is the capital of South Sudan? 🇸🇸', 
        correctAnswer: 'Juba', 
        easyOptions: ['Juba', 'Kampala', 'Nairobi', 'Addis Ababa'], 
        hardOptions: ['Juba', 'Wau', 'Malakal', 'Yambio'], 
        country: 'South Sudan'
    },
    { 
        question: 'What is the capital of Sudan? 🇸🇩', 
        correctAnswer: 'Khartoum', 
        easyOptions: ['Khartoum', 'Cairo', 'Riyadh', 'Juba'], 
        hardOptions: ['Khartoum', 'Omdurman', 'Port Sudan', 'Kassala'], 
        country: 'Sudan'
    },
    { 
        question: 'What is the capital of Tanzania? 🇹🇿', 
        correctAnswer: 'Dodoma', 
        easyOptions: ['Dodoma', 'Dar es Salaam', 'Nairobi', 'Kigali'], 
        hardOptions: ['Dodoma', 'Dar es Salaam', 'Arusha', 'Mbeya'], 
        country: 'Tanzania'
    },
    { 
        question: 'What is the capital of Togo? 🇹🇬', 
        correctAnswer: 'Lomé', 
        easyOptions: ['Lomé', 'Accra', 'Cotonou', 'Ouagadougou'], 
        hardOptions: ['Lomé', 'Kara', 'Sokodé', 'Atakpamé'], 
        country: 'Togo'
    },
    { 
        question: 'What is the capital of Tunisia? 🇹🇳', 
        correctAnswer: 'Tunis', 
        easyOptions: ['Tunis', 'Algiers', 'Cairo', 'Rabat'], 
        hardOptions: ['Tunis', 'Sfax', 'Sousse', 'Kairouan'], 
        country: 'Tunisia'
    },
    { 
        question: 'What is the capital of Uganda? 🇺🇬', 
        correctAnswer: 'Kampala', 
        easyOptions: ['Kampala', 'Nairobi', 'Addis Ababa', 'Dar es Salaam'], 
        hardOptions: ['Kampala', 'Entebbe', 'Jinja', 'Mbarara'], 
        country: 'Uganda'
    },
    { 
        question: 'What is the capital of Zambia? 🇿🇲', 
        correctAnswer: 'Lusaka', 
        easyOptions: ['Lusaka', 'Harare', 'Lilongwe', 'Kinshasa'], 
        hardOptions: ['Lusaka', 'Kitwe', 'Chingola', 'Ndola'], 
        country: 'Zambia'
    },
    { 
        question: 'What is the capital of Zimbabwe? 🇿🇲', 
        correctAnswer: 'Harare', 
        easyOptions: ['Harare', 'Lusaka', 'Gaborone', 'Johannesburg'], 
        hardOptions: ['Harare', 'Bulawayo', 'Gweru', 'Kwekwe'], 
        country: 'Zimbabwe'
    },
	 { 
        question: 'What is the capital of Afghanistan? 🇦🇫', 
        correctAnswer: 'Kabul', 
        easyOptions: ['Kabul', 'Islamabad', 'Tehran', 'New Delhi'], 
        hardOptions: ['Kabul', 'Herat', 'Mazar-i-Sharif', 'Kandahar'], 
        country: 'Afghanistan'
    },
    { 
        question: 'What is the capital of Armenia? 🇦🇲', 
        correctAnswer: 'Yerevan', 
        easyOptions: ['Yerevan', 'Tbilisi', 'Baku', 'Ankara'], 
        hardOptions: ['Yerevan', 'Vanadzor', 'Gyumri', 'Artashat'], 
        country: 'Armenia'
    },
    { 
        question: 'What is the capital of Azerbaijan? 🇦🇿', 
        correctAnswer: 'Baku', 
        easyOptions: ['Baku', 'Tbilisi', 'Yerevan', 'Ankara'], 
        hardOptions: ['Baku', 'Ganja', 'Lankaran', 'Sumqayit'], 
        country: 'Azerbaijan'
    },
    { 
        question: 'What is the capital of Bahrain? 🇧🇭', 
        correctAnswer: 'Manama', 
        easyOptions: ['Manama', 'Doha', 'Kuwait City', 'Dubai'], 
        hardOptions: ['Manama', 'Riffa', 'Muharraq', 'Sitra'], 
        country: 'Bahrain'
    },
    { 
        question: 'What is the capital of Bangladesh? 🇧🇩', 
        correctAnswer: 'Dhaka', 
        easyOptions: ['Dhaka', 'Colombo', 'Kathmandu', 'Islamabad'], 
        hardOptions: ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi'], 
        country: 'Bangladesh'
    },
    { 
        question: 'What is the capital of Brunei? 🇧🇳', 
        correctAnswer: 'Bandar Seri Begawan', 
        easyOptions: ['Bandar Seri Begawan', 'Kuala Lumpur', 'Singapore', 'Manila'], 
        hardOptions: ['Bandar Seri Begawan', 'Kuala Belait', 'Seria', 'Tutong'], 
        country: 'Brunei'
    },
    { 
        question: 'What is the capital of Cambodia? 🇰🇭', 
        correctAnswer: 'Phnom Penh', 
        easyOptions: ['Phnom Penh', 'Hanoi', 'Vientiane', 'Bangkok'], 
        hardOptions: ['Phnom Penh', 'Siem Reap', 'Battambang', 'Sihanoukville'], 
        country: 'Cambodia'
    },
    { 
        question: 'What is the capital of China? 🇨🇳', 
        correctAnswer: 'Beijing', 
        easyOptions: ['Beijing', 'Tokyo', 'Seoul', 'Hanoi'], 
        hardOptions: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'], 
        country: 'China'
    },
    { 
        question: 'What is the capital of Cyprus? 🇨🇾', 
        correctAnswer: 'Nicosia', 
        easyOptions: ['Nicosia', 'Athens', 'Ankara', 'Beirut'], 
        hardOptions: ['Nicosia', 'Larnaca', 'Limassol', 'Famagusta'], 
        country: 'Cyprus'
    },
    { 
        question: 'What is the capital of Georgia? 🇬🇪', 
        correctAnswer: 'Tbilisi', 
        easyOptions: ['Tbilisi', 'Yerevan', 'Baku', 'Ankara'], 
        hardOptions: ['Tbilisi', 'Batumi', 'Zugdidi', 'Rustavi'], 
        country: 'Georgia'
    },
    { 
        question: 'What is the capital of India? 🇮🇳', 
        correctAnswer: 'New Delhi', 
        easyOptions: ['New Delhi', 'Tokyo', 'Dhaka', 'Islamabad'], 
        hardOptions: ['New Delhi', 'Mumbai', 'Bengaluru', 'Chennai'], 
        country: 'India'
    },
    { 
        question: 'What is the capital of Indonesia? 🇮🇩', 
        correctAnswer: 'Jakarta', 
        easyOptions: ['Jakarta', 'Kuala Lumpur', 'Manila', 'Singapore'], 
        hardOptions: ['Jakarta', 'Surabaya', 'Bandung', 'Medan'], 
        country: 'Indonesia'
    },
    { 
        question: 'What is the capital of Iran? 🇮🇷', 
        correctAnswer: 'Tehran', 
        easyOptions: ['Tehran', 'Baghdad', 'Dubai', 'Kabul'], 
        hardOptions: ['Tehran', 'Mashhad', 'Isfahan', 'Shiraz'], 
        country: 'Iran'
    },
    { 
        question: 'What is the capital of Iraq? 🇮🇶', 
        correctAnswer: 'Baghdad', 
        easyOptions: ['Baghdad', 'Tehran', 'Damascus', 'Riyadh'], 
        hardOptions: ['Baghdad', 'Basra', 'Mosul', 'Erbil'], 
        country: 'Iraq'
    },
    { 
        question: 'What is the capital of Israel? 🇮🇱', 
        correctAnswer: 'Jerusalem', 
        easyOptions: ['Jerusalem', 'Tel Aviv', 'Cairo', 'Amman'], 
        hardOptions: ['Jerusalem', 'Tel Aviv', 'Haifa', 'Beersheba'], 
        country: 'Israel'
    },
    { 
        question: 'What is the capital of Japan? 🇯🇵', 
        correctAnswer: 'Tokyo', 
        easyOptions: ['Tokyo', 'Beijing', 'Seoul', 'Manila'], 
        hardOptions: ['Tokyo', 'Osaka', 'Kyoto', 'Nagoya'], 
        country: 'Japan'
    },
    { 
        question: 'What is the capital of Jordan? 🇯🇴', 
        correctAnswer: 'Amman', 
        easyOptions: ['Amman', 'Cairo', 'Beirut', 'Jerusalem'], 
        hardOptions: ['Amman', 'Zarqa', 'Irbid', 'Aqaba'], 
        country: 'Jordan'
    },
    { 
        question: 'What is the capital of Kazakhstan? 🇰🇿', 
        correctAnswer: 'Astana', 
        easyOptions: ['Astana', 'Almaty', 'Tashkent', 'Baku'], 
        hardOptions: ['Astana', 'Almaty', 'Karaganda', 'Shymkent'], 
        country: 'Kazakhstan'
    },
    { 
        question: 'What is the capital of Kuwait? 🇰🇼', 
        correctAnswer: 'Kuwait City', 
        easyOptions: ['Kuwait City', 'Doha', 'Riyadh', 'Manama'], 
        hardOptions: ['Kuwait City', 'Hawally', 'Salmiya', 'Jahra'], 
        country: 'Kuwait'
    },
    { 
        question: 'What is the capital of Kyrgyzstan? 🇰🇬', 
        correctAnswer: 'Bishkek', 
        easyOptions: ['Bishkek', 'Tashkent', 'Astana', 'Almaty'], 
        hardOptions: ['Bishkek', 'Osh', 'Jalal-Abad', 'Karabalta'], 
        country: 'Kyrgyzstan'
    },
    { 
        question: 'What is the capital of Laos? 🇱🇦', 
        correctAnswer: 'Vientiane', 
        easyOptions: ['Vientiane', 'Hanoi', 'Bangkok', 'Phnom Penh'], 
        hardOptions: ['Vientiane', 'Luang Prabang', 'Pakse', 'Savannakhet'], 
        country: 'Laos'
    },
    { 
        question: 'What is the capital of Lebanon? 🇱🇧', 
        correctAnswer: 'Beirut', 
        easyOptions: ['Beirut', 'Damascus', 'Amman', 'Cairo'], 
        hardOptions: ['Beirut', 'Tripoli', 'Sidon', 'Tyre'], 
        country: 'Lebanon'
    },
    { 
        question: 'What is the capital of Malaysia? 🇲🇾', 
        correctAnswer: 'Kuala Lumpur', 
        easyOptions: ['Kuala Lumpur', 'Singapore', 'Manila', 'Bangkok'], 
        hardOptions: ['Kuala Lumpur', 'Penang', 'Johor Bahru', 'Malacca'], 
        country: 'Malaysia'
    },
    { 
        question: 'What is the capital of Maldives? 🇲🇻', 
        correctAnswer: 'Malé', 
        easyOptions: ['Malé', 'Colombo', 'Dhaka', 'Hanoi'], 
        hardOptions: ['Malé', 'Addu City', 'Fuvahmulah', 'Hinnavaru'], 
        country: 'Maldives'
    },
    { 
        question: 'What is the capital of Mongolia? 🇲🇳', 
        correctAnswer: 'Ulaanbaatar', 
        easyOptions: ['Ulaanbaatar', 'Beijing', 'Seoul', 'Tokyo'], 
        hardOptions: ['Ulaanbaatar', 'Erdenet', 'Darkhan', 'Choibalsan'], 
        country: 'Mongolia'
    },
    { 
        question: 'What is the capital of Myanmar? 🇲🇲', 
        correctAnswer: 'Naypyidaw', 
        easyOptions: ['Naypyidaw', 'Yangon', 'Bangkok', 'Hanoi'], 
        hardOptions: ['Naypyidaw', 'Yangon', 'Mandalay', 'Bagan'], 
        country: 'Myanmar'
    },
    { 
        question: 'What is the capital of Nepal? 🇳🇵', 
        correctAnswer: 'Kathmandu', 
        easyOptions: ['Kathmandu', 'New Delhi', 'Thimphu', 'Dhaka'], 
        hardOptions: ['Kathmandu', 'Pokhara', 'Biratnagar', 'Lalitpur'], 
        country: 'Nepal'
    },
    { 
        question: 'What is the capital of North Korea? 🇰🇵', 
        correctAnswer: 'Pyongyang', 
        easyOptions: ['Pyongyang', 'Seoul', 'Beijing', 'Tokyo'], 
        hardOptions: ['Pyongyang', 'Hamhung', 'Nampo', 'Wonsan'], 
        country: 'North Korea'
    },
    { 
        question: 'What is the capital of Oman? 🇴🇲', 
        correctAnswer: 'Muscat', 
        easyOptions: ['Muscat', 'Dubai', 'Doha', 'Kuwait City'], 
        hardOptions: ['Muscat', 'Salalah', 'Sohar', 'Nizwa'], 
        country: 'Oman'
    },
    { 
        question: 'What is the capital of Pakistan? 🇵🇰', 
        correctAnswer: 'Islamabad', 
        easyOptions: ['Islamabad', 'New Delhi', 'Dhaka', 'Kabul'], 
        hardOptions: ['Islamabad', 'Karachi', 'Lahore', 'Faisalabad'], 
        country: 'Pakistan'
    },
    { 
        question: 'What is the capital of Palestine? 🇵🇸', 
        correctAnswer: 'Ramallah', 
        easyOptions: ['Ramallah', 'Jerusalem', 'Amman', 'Beirut'], 
        hardOptions: ['Ramallah', 'Gaza City', 'Hebron', 'Nablus'], 
        country: 'Palestine'
    },
    { 
        question: 'What is the capital of Qatar? 🇶🇦', 
        correctAnswer: 'Doha', 
        easyOptions: ['Doha', 'Abu Dhabi', 'Kuwait City', 'Manama'], 
        hardOptions: ['Doha', 'Al Wakrah', 'Al Khor', 'Al Rayyan'], 
        country: 'Qatar'
    },
    { 
        question: 'What is the capital of Russia? 🇷🇺', 
        correctAnswer: 'Moscow', 
        easyOptions: ['Moscow', 'Saint Petersburg', 'Kiev', 'Tbilisi'], 
        hardOptions: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg'], 
        country: 'Russia'
    },
    { 
        question: 'What is the capital of Saudi Arabia? 🇸🇦', 
        correctAnswer: 'Riyadh', 
        easyOptions: ['Riyadh', 'Dubai', 'Doha', 'Kuwait City'], 
        hardOptions: ['Riyadh', 'Jeddah', 'Mecca', 'Dammam'], 
        country: 'Saudi Arabia'
    },
    { 
        question: 'What is the capital of Singapore? 🇸🇬', 
        correctAnswer: 'Singapore', 
        easyOptions: ['Singapore', 'Kuala Lumpur', 'Manila', 'Jakarta'], 
        hardOptions: ['Singapore', 'Changi', 'Orchard Road', 'Sentosa'], 
        country: 'Singapore'
    },
    { 
        question: 'What is the capital of South Korea? 🇰🇷', 
        correctAnswer: 'Seoul', 
        easyOptions: ['Seoul', 'Tokyo', 'Beijing', 'Hanoi'], 
        hardOptions: ['Seoul', 'Busan', 'Incheon', 'Gwangju'], 
        country: 'South Korea'
    },
    { 
        question: 'What is the capital of Sri Lanka? 🇱🇰', 
        correctAnswer: 'Colombo', 
        easyOptions: ['Colombo', 'Dhaka', 'New Delhi', 'Kathmandu'], 
        hardOptions: ['Colombo', 'Kandy', 'Galle', 'Jaffna'], 
        country: 'Sri Lanka'
    },
    { 
        question: 'What is the capital of Syria? 🇸🇾', 
        correctAnswer: 'Damascus', 
        easyOptions: ['Damascus', 'Beirut', 'Amman', 'Baghdad'], 
        hardOptions: ['Damascus', 'Aleppo', 'Homs', 'Latakia'], 
        country: 'Syria'
    },
    { 
        question: 'What is the capital of Taiwan? 🇹🇼', 
        correctAnswer: 'Taipei', 
        easyOptions: ['Taipei', 'Tokyo', 'Seoul', 'Beijing'], 
        hardOptions: ['Taipei', 'Kaohsiung', 'Taichung', 'Tainan'], 
        country: 'Taiwan'
    },
    { 
        question: 'What is the capital of Thailand? 🇹🇭', 
        correctAnswer: 'Bangkok', 
        easyOptions: ['Bangkok', 'Hanoi', 'Kuala Lumpur', 'Manila'], 
        hardOptions: ['Bangkok', 'Chiang Mai', 'Pattaya', 'Phuket'], 
        country: 'Thailand'
    },
    { 
        question: 'What is the capital of Turkey? 🇹🇷', 
        correctAnswer: 'Ankara', 
        easyOptions: ['Ankara', 'Istanbul', 'Athens', 'Cairo'], 
        hardOptions: ['Ankara', 'Istanbul', 'Izmir', 'Bursa'], 
        country: 'Turkey'
    },
    { 
        question: 'What is the capital of Turkmenistan? 🇹🇲', 
        correctAnswer: 'Ashgabat', 
        easyOptions: ['Ashgabat', 'Tashkent', 'Baku', 'Tehran'], 
        hardOptions: ['Ashgabat', 'Turkmenabat', 'Mary', 'Balkanabat'], 
        country: 'Turkmenistan'
    },
    { 
        question: 'What is the capital of United Arab Emirates? 🇦🇪', 
        correctAnswer: 'Abu Dhabi', 
        easyOptions: ['Abu Dhabi', 'Dubai', 'Doha', 'Kuwait City'], 
        hardOptions: ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman'], 
        country: 'United Arab Emirates'
    },
    { 
        question: 'What is the capital of Uzbekistan? 🇺🇿', 
        correctAnswer: 'Tashkent', 
        easyOptions: ['Tashkent', 'Astana', 'Baku', 'Kabul'], 
        hardOptions: ['Tashkent', 'Samarkand', 'Bukhara', 'Namangan'], 
        country: 'Uzbekistan'
    },
    { 
        question: 'What is the capital of Vietnam? 🇻🇳', 
        correctAnswer: 'Hanoi', 
        easyOptions: ['Hanoi', 'Bangkok', 'Beijing', 'Manila'], 
        hardOptions: ['Hanoi', 'Ho Chi Minh City', 'Da Nang', 'Hue'], 
        country: 'Vietnam'
    },
	{ 
        question: 'What is the capital of Albania? 🇦🇱', 
        correctAnswer: 'Tirana', 
        easyOptions: ['Tirana', 'Athens', 'Skopje', 'Podgorica'], 
        hardOptions: ['Tirana', 'Durrës', 'Vlorë', 'Shkodër'], 
        country: 'Albania'
    },
    { 
        question: 'What is the capital of Andorra? 🇦🇩', 
        correctAnswer: 'Andorra la Vella', 
        easyOptions: ['Andorra la Vella', 'Madrid', 'Paris', 'Rome'], 
        hardOptions: ['Andorra la Vella', 'Escaldes-Engordany', 'Encamp', 'La Massana'], 
        country: 'Andorra'
    },
    { 
        question: 'What is the capital of Austria? 🇦🇹', 
        correctAnswer: 'Vienna', 
        easyOptions: ['Vienna', 'Bratislava', 'Berlin', 'Prague'], 
        hardOptions: ['Vienna', 'Salzburg', 'Graz', 'Innsbruck'], 
        country: 'Austria'
    },
    { 
        question: 'What is the capital of Belgium? 🇧🇪', 
        correctAnswer: 'Brussels', 
        easyOptions: ['Brussels', 'Amsterdam', 'Paris', 'Berlin'], 
        hardOptions: ['Brussels', 'Antwerp', 'Ghent', 'Bruges'], 
        country: 'Belgium'
    },
    { 
        question: 'What is the capital of Bosnia and Herzegovina? 🇧🇦', 
        correctAnswer: 'Sarajevo', 
        easyOptions: ['Sarajevo', 'Belgrade', 'Zagreb', 'Podgorica'], 
        hardOptions: ['Sarajevo', 'Banja Luka', 'Mostar', 'Tuzla'], 
        country: 'Bosnia and Herzegovina'
    },
    { 
        question: 'What is the capital of Bulgaria? 🇧🇬', 
        correctAnswer: 'Sofia', 
        easyOptions: ['Sofia', 'Bucharest', 'Athens', 'Belgrade'], 
        hardOptions: ['Sofia', 'Plovdiv', 'Varna', 'Burgas'], 
        country: 'Bulgaria'
    },
    { 
        question: 'What is the capital of Croatia? 🇭🇷', 
        correctAnswer: 'Zagreb', 
        easyOptions: ['Zagreb', 'Ljubljana', 'Sarajevo', 'Belgrade'], 
        hardOptions: ['Zagreb', 'Split', 'Dubrovnik', 'Rijeka'], 
        country: 'Croatia'
    },
    { 
        question: 'What is the capital of Cyprus? 🇨🇾', 
        correctAnswer: 'Nicosia', 
        easyOptions: ['Nicosia', 'Athens', 'Cairo', 'Ankara'], 
        hardOptions: ['Nicosia', 'Limassol', 'Larnaca', 'Paphos'], 
        country: 'Cyprus'
    },
    { 
        question: 'What is the capital of Czech Republic? 🇨🇿', 
        correctAnswer: 'Prague', 
        easyOptions: ['Prague', 'Vienna', 'Berlin', 'Budapest'], 
        hardOptions: ['Prague', 'Brno', 'Ostrava', 'Plzeň'], 
        country: 'Czech Republic'
    },
    { 
        question: 'What is the capital of Denmark? 🇩🇰', 
        correctAnswer: 'Copenhagen', 
        easyOptions: ['Copenhagen', 'Oslo', 'Stockholm', 'Helsinki'], 
        hardOptions: ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg'], 
        country: 'Denmark'
    },
    { 
        question: 'What is the capital of Estonia? 🇪🇪', 
        correctAnswer: 'Tallinn', 
        easyOptions: ['Tallinn', 'Riga', 'Vilnius', 'Helsinki'], 
        hardOptions: ['Tallinn', 'Tartu', 'Narva', 'Pärnu'], 
        country: 'Estonia'
    },
    { 
        question: 'What is the capital of Finland? 🇫🇮', 
        correctAnswer: 'Helsinki', 
        easyOptions: ['Helsinki', 'Stockholm', 'Copenhagen', 'Oslo'], 
        hardOptions: ['Helsinki', 'Tampere', 'Turku', 'Oulu'], 
        country: 'Finland'
    },
    { 
        question: 'What is the capital of France? 🇫🇷', 
        correctAnswer: 'Paris', 
        easyOptions: ['Paris', 'Berlin', 'Rome', 'Madrid'], 
        hardOptions: ['Paris', 'Lyon', 'Marseille', 'Toulouse'], 
        country: 'France'
    },
    { 
        question: 'What is the capital of Germany? 🇩🇪', 
        correctAnswer: 'Berlin', 
        easyOptions: ['Berlin', 'Vienna', 'Amsterdam', 'Brussels'], 
        hardOptions: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'], 
        country: 'Germany'
    },
    { 
        question: 'What is the capital of Greece? 🇬🇷', 
        correctAnswer: 'Athens', 
        easyOptions: ['Athens', 'Rome', 'Sofia', 'Ankara'], 
        hardOptions: ['Athens', 'Thessaloniki', 'Patras', 'Heraklion'], 
        country: 'Greece'
    },
    { 
        question: 'What is the capital of Hungary? 🇭🇺', 
        correctAnswer: 'Budapest', 
        easyOptions: ['Budapest', 'Vienna', 'Prague', 'Warsaw'], 
        hardOptions: ['Budapest', 'Debrecen', 'Szeged', 'Miskolc'], 
        country: 'Hungary'
    },
    { 
        question: 'What is the capital of Iceland? 🇮🇸', 
        correctAnswer: 'Reykjavik', 
        easyOptions: ['Reykjavik', 'Oslo', 'Copenhagen', 'Helsinki'], 
        hardOptions: ['Reykjavik', 'Akureyri', 'Keflavik', 'Hafnarfjordur'], 
        country: 'Iceland'
    },
    { 
        question: 'What is the capital of Ireland? 🇮🇪', 
        correctAnswer: 'Dublin', 
        easyOptions: ['Dublin', 'Belfast', 'London', 'Edinburgh'], 
        hardOptions: ['Dublin', 'Cork', 'Limerick', 'Galway'], 
        country: 'Ireland'
    },
    { 
        question: 'What is the capital of Italy? 🇮🇹', 
        correctAnswer: 'Rome', 
        easyOptions: ['Rome', 'Paris', 'Berlin', 'Madrid'], 
        hardOptions: ['Rome', 'Milan', 'Naples', 'Turin'], 
        country: 'Italy'
    },
    { 
        question: 'What is the capital of Kosovo? 🇽🇰', 
        correctAnswer: 'Pristina', 
        easyOptions: ['Pristina', 'Belgrade', 'Skopje', 'Tirana'], 
        hardOptions: ['Pristina', 'Peja', 'Mitrovica', 'Gjilan'], 
        country: 'Kosovo'
    },
    { 
        question: 'What is the capital of Latvia? 🇱🇻', 
        correctAnswer: 'Riga', 
        easyOptions: ['Riga', 'Tallinn', 'Vilnius', 'Warsaw'], 
        hardOptions: ['Riga', 'Daugavpils', 'Liepaja', 'Jelgava'], 
        country: 'Latvia'
    },
    { 
        question: 'What is the capital of Liechtenstein? 🇱🇮', 
        correctAnswer: 'Vaduz', 
        easyOptions: ['Vaduz', 'Zurich', 'Vienna', 'Munich'], 
        hardOptions: ['Vaduz', 'Schaan', 'Balzers', 'Triesen'], 
        country: 'Liechtenstein'
    },
    { 
        question: 'What is the capital of Lithuania? 🇱🇹', 
        correctAnswer: 'Vilnius', 
        easyOptions: ['Vilnius', 'Riga', 'Tallinn', 'Warsaw'], 
        hardOptions: ['Vilnius', 'Kaunas', 'Klaipeda', 'Šiauliai'], 
        country: 'Lithuania'
    },
    { 
        question: 'What is the capital of Luxembourg? 🇱🇺', 
        correctAnswer: 'Luxembourg', 
        easyOptions: ['Luxembourg', 'Brussels', 'Paris', 'Berlin'], 
        hardOptions: ['Luxembourg', 'Esch-sur-Alzette', 'Differdange', 'Dudelange'], 
        country: 'Luxembourg'
    },
    { 
        question: 'What is the capital of Malta? 🇲🇹',
correctAnswer: 'Valletta',
easyOptions: ['Valletta', 'Rome', 'Athens', 'Cairo'],
hardOptions: ['Valletta', 'Sliema', 'St. Julian‘s', 'Birkirkara'],
country: 'Malta'
},
{ 
        question: 'What is the capital of Canada? 🇨🇦', 
        correctAnswer: 'Ottawa', 
        easyOptions: ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'], 
        hardOptions: ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'], 
        country: 'Canada'
    },
    { 
        question: 'What is the capital of Mexico? 🇲🇽', 
        correctAnswer: 'Mexico City', 
        easyOptions: ['Mexico City', 'Guadalajara', 'Monterrey', 'Cancun'], 
        hardOptions: ['Mexico City', 'Guadalajara', 'Monterrey', 'Cancun'], 
        country: 'Mexico'
    },
    { 
        question: 'What is the capital of the United States? 🇺🇸', 
        correctAnswer: 'Washington, D.C.', 
        easyOptions: ['Washington, D.C.', 'New York', 'Los Angeles', 'Chicago'], 
        hardOptions: ['Washington, D.C.', 'New York', 'Los Angeles', 'Chicago'], 
        country: 'United States'
    },
    { 
        question: 'What is the capital of Belize? 🇧🇿', 
        correctAnswer: 'Belmopan', 
        easyOptions: ['Belmopan', 'Belize City', 'San Ignacio', 'Corozal'], 
        hardOptions: ['Belmopan', 'Belize City', 'San Ignacio', 'Corozal'], 
        country: 'Belize'
    },
    { 
        question: 'What is the capital of Costa Rica? 🇨🇷', 
        correctAnswer: 'San José', 
        easyOptions: ['San José', 'Alajuela', 'Heredia', 'Cartago'], 
        hardOptions: ['San José', 'Alajuela', 'Heredia', 'Cartago'], 
        country: 'Costa Rica'
    },
    { 
        question: 'What is the capital of El Salvador? 🇸🇻', 
        correctAnswer: 'San Salvador', 
        easyOptions: ['San Salvador', 'Santa Ana', 'San Miguel', 'Ahuachapán'], 
        hardOptions: ['San Salvador', 'Santa Ana', 'San Miguel', 'Ahuachapán'], 
        country: 'El Salvador'
    },
    { 
        question: 'What is the capital of Guatemala? 🇬🇹', 
        correctAnswer: 'Guatemala City', 
        easyOptions: ['Guatemala City', 'Antigua', 'Quetzaltenango', 'Escuintla'], 
        hardOptions: ['Guatemala City', 'Antigua', 'Quetzaltenango', 'Escuintla'], 
        country: 'Guatemala'
    },
    { 
        question: 'What is the capital of Honduras? 🇭🇳', 
        correctAnswer: 'Tegucigalpa', 
        easyOptions: ['Tegucigalpa', 'San Pedro Sula', 'La Ceiba', 'Comayagua'], 
        hardOptions: ['Tegucigalpa', 'San Pedro Sula', 'La Ceiba', 'Comayagua'], 
        country: 'Honduras'
    },
    { 
        question: 'What is the capital of Nicaragua? 🇳🇮', 
        correctAnswer: 'Managua', 
        easyOptions: ['Managua', 'León', 'Granada', 'Estelí'], 
        hardOptions: ['Managua', 'León', 'Granada', 'Estelí'], 
        country: 'Nicaragua'
    },
    { 
        question: 'What is the capital of Panama? 🇵🇦', 
        correctAnswer: 'Panama City', 
        easyOptions: ['Panama City', 'David', 'Colón', 'La Chorrera'], 
        hardOptions: ['Panama City', 'David', 'Colón', 'La Chorrera'], 
        country: 'Panama'
    },
    { 
        question: 'What is the capital of the Bahamas? 🇧🇸', 
        correctAnswer: 'Nassau', 
        easyOptions: ['Nassau', 'Freeport', 'Andros Town', 'George Town'], 
        hardOptions: ['Nassau', 'Freeport', 'Andros Town', 'George Town'], 
        country: 'The Bahamas'
    },
    { 
        question: 'What is the capital of Barbados? 🇧🇧', 
        correctAnswer: 'Bridgetown', 
        easyOptions: ['Bridgetown', 'Speightstown', 'Oistins', 'Holetown'], 
        hardOptions: ['Bridgetown', 'Speightstown', 'Oistins', 'Holetown'], 
        country: 'Barbados'
    },
    { 
        question: 'What is the capital of Cuba? 🇨🇺', 
        correctAnswer: 'Havana', 
        easyOptions: ['Havana', 'Santiago de Cuba', 'Camagüey', 'Holguín'], 
        hardOptions: ['Havana', 'Santiago de Cuba', 'Camagüey', 'Holguín'], 
        country: 'Cuba'
    },
    { 
        question: 'What is the capital of Dominica? 🇩🇲', 
        correctAnswer: 'Roseau', 
        easyOptions: ['Roseau', 'Portsmouth', 'Salisbury', 'Marigot'], 
        hardOptions: ['Roseau', 'Portsmouth', 'Salisbury', 'Marigot'], 
        country: 'Dominica'
    },
    { 
        question: 'What is the capital of Haiti? 🇭🇹', 
        correctAnswer: 'Port-au-Prince', 
        easyOptions: ['Port-au-Prince', 'Cap-Haïtien', 'Jacmel', 'Les Cayes'], 
        hardOptions: ['Port-au-Prince', 'Cap-Haïtien', 'Jacmel', 'Les Cayes'], 
        country: 'Haiti'
    },
    { 
        question: 'What is the capital of Jamaica? 🇯🇲', 
        correctAnswer: 'Kingston', 
        easyOptions: ['Kingston', 'Montego Bay', 'Spanish Town', 'Negril'], 
        hardOptions: ['Kingston', 'Montego Bay', 'Spanish Town', 'Negril'], 
        country: 'Jamaica'
    },
    { 
        question: 'What is the capital of Puerto Rico? 🇵🇷', 
        correctAnswer: 'San Juan', 
        easyOptions: ['San Juan', 'Bayamón', 'Ponce', 'Arecibo'], 
        hardOptions: ['San Juan', 'Bayamón', 'Ponce', 'Arecibo'], 
        country: 'Puerto Rico'
    },
	

];

// Add more questions here if needed
      let score = 0;
let highscore = parseInt(localStorage.getItem('highscore')) || 0;
let currentQuestionIndex = 0;

const scoreElement = document.getElementById('score').querySelector('span');
const highscoreElement = document.getElementById('highscore').querySelector('span');
scoreElement.textContent = score;
highscoreElement.textContent = highscore;
        
let map = L.map('map').setView([20, 0], 2); // Set initial view
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Load GeoJSON data for countries
        let countriesLayer;

        function loadGeoJSON() {
            fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
                .then(response => response.json())
                .then(data => {
                    countriesLayer = L.geoJSON(data, {
                        style: function (feature) {
                            return { color: '#555', weight: 1, fillOpacity: 0.5 };
                        }
                    }).addTo(map);
                });
        }

        loadGeoJSON();function highlightCountry(countryName) {
    if (!countriesLayer) {
        console.error('countriesLayer is not defined');
        return;
    }

    if (!countryName) {
        console.error('countryName is not provided');
        return;
    }

    console.log('Highlighting country:', countryName);

    let countryFound = false;

    countriesLayer.eachLayer(layer => {
        if (layer.feature.properties.name === countryName) {
            layer.setStyle({ fillColor: 'yellow', fillOpacity: 1 });
            countryFound = true;
        } else {
            layer.setStyle({ fillColor: '#555', fillOpacity: 0.5 });
        }
    });

    if (!countryFound) {
        console.warn('Country not found:', countryName);
    }
}

// Initialize Chart.js
// Event listener for dashboard button
document.querySelector('.dashboard-btn').addEventListener('click', () => {
    document.getElementById('dashboard-modal').style.display = 'block';
    updateDashboard(); // Function to update dashboard content
});

// Event listener for closing the modal
document.querySelector('.modal .close-btn').addEventListener('click', () => {
    document.getElementById('dashboard-modal').style.display = 'none';
});

// Function to update dashboard content
function updateDashboard() {
    // Fetch or calculate real data and update dashboard content
    document.getElementById('achievements').textContent = '0'; // Update with real data
    document.getElementById('activity').textContent = '0'; // Update with real data
    document.getElementById('usage').textContent = '0'; // Update with real data
    document.getElementById('correct-answers').textContent = '0'; // Update with real data
    document.getElementById('other-metrics').textContent = '0'; // Update with real data

    // Update charts
    scoreChart.data.labels = []; // Update with real labels
    scoreChart.data.datasets[0].data = []; // Update with real data
    scoreChart.update();

    activityChart.data.datasets[0].data = [0, 0]; // Update with real data
    activityChart.update();
}

// Initialize Chart.js
const scoreChartCanvas = document.getElementById('scoreChart').getContext('2d');
const activityChartCanvas = document.getElementById('activityChart').getContext('2d');

const scoreChart = new Chart(scoreChartCanvas, {
    type: 'line',
    data: {
        labels: [], // Dates or times
        datasets: [{
            label: 'Score Over Time',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: { 
                beginAtZero: true 
            },
            y: { 
                beginAtZero: true 
            }
        }
    }
});

const activityChart = new Chart(activityChartCanvas, {
    type: 'bar',
    data: {
        labels: ['Correct Answers', 'Incorrect Answers'],
        datasets: [{
            label: 'Activity',
            data: [0, 0], // Initial data
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: { 
                beginAtZero: true 
            },
            y: { 
                beginAtZero: true 
            }
        }
    }
});
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function loadQuestion() {
    const difficulty = document.getElementById('difficulty').value;
    const filteredQuestions = generateQuestions(difficulty);
    shuffle(filteredQuestions);

    const currentQuestion = filteredQuestions[currentQuestionIndex];
    
    // Display the question
    document.getElementById('question').textContent = currentQuestion.question;
    
    // Set the answer options based on the difficulty level
    let options = [];
    if (difficulty === 'easy') {
        options = currentQuestion.easyOptions;
    } else if (difficulty === 'hard') {
        options = currentQuestion.hardOptions;
    }
    
    shuffle(options);
    
    // Set the options to buttons
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((button, index) => {
        button.textContent = options[index];
        button.onclick = () => checkAnswer(button.textContent, currentQuestion.correctAnswer);
    });

    // Highlight the corresponding country on the map
    highlightCountry(currentQuestion.country);
}

function triggerWiggleAndGlowAnimation() {
    const highscoreElement = document.getElementById('highscore');
    
    // Remove the animation class if it's already there to allow retriggering the animation
    highscoreElement.classList.remove('animate');
    
    // Use a timeout to ensure the class is removed before adding it back
    setTimeout(() => {
        highscoreElement.classList.add('animate');
    }, 10);
}

// Confetti animation function
function createConfetti() {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548'];

    function createPiece() {
        const piece = document.createElement('div');
        piece.classList.add('confetti');
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width = Math.random() * 20 + 'px';
        piece.style.height = Math.random() * 20 + 'px';
        piece.style.left = (Math.random() * window.innerWidth) + 'px';
        piece.style.top = '-20px';
        piece.style.animationDuration = '3s'; // Set animation duration to 3 seconds
        document.body.appendChild(piece);
        piece.addEventListener('animationend', function() {
            piece.parentNode.removeChild(piece);
        });
    }

    // Adjust the number of confetti pieces
    const totalPieces = 700;
    const interval = 5; // milliseconds

    let i = 0;
    let intervalId = setInterval(function() {
        createPiece();
        i++;
        if (i >= totalPieces) {
            clearInterval(intervalId);
        }
    }, interval);
}

function checkAnswer(selectedAnswer, correctAnswer) {
    const messageElement = document.getElementById('message');
    
    if (selectedAnswer === correctAnswer) {
        score++;
        messageElement.textContent = `Correct! 🎉`;
        messageElement.style.background = 'green';
        messageElement.style.color = 'white';
        messageElement.style.padding = '10px 20px';
        messageElement.style.borderRadius = '12px';
        messageElement.style.display = 'inline-block'; // Shrinks to the content width
    } else {
        score = 0;
        messageElement.textContent = `Wrong! 😞 The correct answer is ${correctAnswer}.`;
        messageElement.style.background = 'red';
        messageElement.style.color = 'black';
        messageElement.style.padding = '10px 20px';
        messageElement.style.borderRadius = '12px';
        messageElement.style.display = 'inline-block'; // Shrinks to the content width
    }

    // Add fade-in class to show the message
    messageElement.classList.add('fade-in');
    
    // Set a timeout to remove the message after it has been shown
    setTimeout(() => {
        messageElement.classList.remove('fade-in');
        messageElement.classList.add('fade-out');
        
        // Wait for fade-out transition to complete before clearing text and loading new question
        setTimeout(() => {
            messageElement.classList.remove('fade-out');
            messageElement.textContent = '';
            messageElement.style.display = 'none'; // Hide the element completely

            updateScore(); // Update score and charts before loading new question
            loadQuestion(); // Load the next question after the message disappears
        }, 500); // Match this duration with CSS transition
    }, 1000); // Display message for 1 second
}

function updateScore() {
    scoreElement.textContent = score;
    if (score > highscore) {
        highscore = score;
        localStorage.setItem('highscore', highscore);
createConfetti();   triggerWiggleAndGlowAnimation();
   highscoreElement.textContent = highscore;
        
        // Trigger animation on highscore change
        highscoreElement.classList.add('animate');
        setTimeout(() => highscoreElement.classList.remove('animate'), 1000);
        
        // Update score chart data
        const now = new Date().toLocaleTimeString();
        scoreChart.data.labels.push(now);
        scoreChart.data.datasets[0].data.push(score);
        scoreChart.update();
    }
    
    // Update activity chart
    activityChart.data.datasets[0].data[0] = score; // Correct answers
    activityChart.data.datasets[0].data[1] = questions.length - currentQuestionIndex; // Incorrect answers
    activityChart.update();
}

// Generate or fetch questions based on difficulty
function generateQuestions(difficulty) {
    // Return a list of questions based on difficulty
    return questions;
}

// Event listener for dashboard button
document.getElementById('dashboard-btn').addEventListener('click', () => {
    document.getElementById('dashboard-modal').style.display = 'block';
    updateDashboard(); // Function to update dashboard content
});

// Event listener for closing the modal
document.querySelector('.modal .close-btn').addEventListener('click', () => {
    document.getElementById('dashboard-modal').style.display = 'none';
});

// Function to update dashboard content
function updateDashboard() {
    // Fetch or calculate real data and update dashboard content
    document.getElementById('achievements').textContent = '0'; // Update with real data
    document.getElementById('activity').textContent = '0'; // Update with real data
    document.getElementById('usage').textContent = '0'; // Update with real data
    document.getElementById('correct-answers').textContent = score; // Update with real data
    document.getElementById('other-metrics').textContent = '0'; // Update with real data
}
document.getElementById('difficulty').addEventListener('change', function() {
    const selectedDifficulty = this.value;
    console.log('Selected difficulty:', selectedDifficulty);

    // Update your application based on the selected difficulty
    updateDifficulty(selectedDifficulty);
});

function updateDifficulty(difficulty) {
    // Add your logic here to update the application based on the difficulty
    // For example:
    if (difficulty === 'easy') {
        // Set up for easy difficulty
    } else if (difficulty === 'hard') {
        // Set up for hard difficulty
    }
}
// Initial load
loadQuestion();
