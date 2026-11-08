// Adams County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-11-08
//
// Every URL below was fetched and its content checked against the organization
// it claims to be. Nothing here was guessed from a naming pattern.
//
// THE HAZARD HERE IS THAT THERE ARE TWELVE ADAMS COUNTIES
//
// Colorado's and Pennsylvania's (Gettysburg) dominate every search; Illinois,
// Indiana, Iowa, Nebraska, Mississippi, Wisconsin, Washington, Idaho and North
// Dakota have one too. West Union is also in Iowa and West Virginia, and
// Manchester is everywhere. Traps hit while building this file:
//
//   adamscountymuseum.com    -> Adams County Historical Society, COLORADO
//   adamscountycf.org        -> Adams County Community Foundation, PENNSYLVANIA
//   adamscountyema.vr-sar.org -> Adams County EMA, ILLINOIS
//   vil-manchester.org       -> Manchester, MICHIGAN
//   "Adams County Health Department" searches -> Indiana and Illinois first
//
// The Ohio equivalents are achs-ohio.org, accfo.org and adamscountyhealth.org.
//
// OUTRIGHT TRAPS — do not add any of these, ever:
//
//   * johntwilsonhomestead.com, still linked from the visitors bureau's historic
//     sites page, is a hijacked domain hosting a Czech gambling blog.
//   * prismnews.com/local/adams-oh/ publishes AI-written "local news" about
//     the county with no newsroom behind it.
//   * ohparks.com (the July file's Adams Lake link) is a third-party blog, not
//     ODNR. The official page is on ohiodnr.gov.
//
// THINGS THAT ARE OUT OF DATE EVERYWHERE ELSE:
//
//   * Serpent Mound has been operated directly by Ohio History Connection since
//     March 2021; Arc of Appalachia managed it for the decade before. Anything
//     crediting Arc as operator is stale.
//   * Keim Family Market on Wheat Ridge is now Yoder's Bakery & Furniture.
//   * Southern Ohio ESC moved from Hillsboro to 3321 Airborne Road, Wilmington;
//     its old domain soesc.org still circulates.
//   * The Health Department's own behavioral health program has closed; it now
//     refers residents to The Counseling Center and others in West Union.
//   * hospiceofhope.org redirects to hospiceofhope.com.
//   * boe.ohio.gov/adams/ fails without "www."; the www form works.
//
// GEOGRAPHY WORTH KNOWING:
//
//   * Adams has NO cities — seven villages. Only Peebles has a website. The
//     Village of Rome was declared "unauditable" by the state in 2016 for having
//     no identifiable officials. Only Tiffin Township of 15 has a site.
//   * TWO school districts, not one: Adams County/Ohio Valley covers most of the
//     county; Manchester Local is separate. Manchester High School is Manchester
//     Local's, not Ohio Valley's.
//   * The courthouse at 110 West Main St. houses the Auditor, Treasurer,
//     Recorder, Clerk, Prosecutor, Sheriff, Coroner and both courts; the Annex
//     at 215 N. Cross St. houses the Commissioners, ECD and Veterans; JFS and
//     CSEA are at 482 Rice Drive. Adams has a County Court, not a municipal court.
//   * 9-1-1 is run by the Sheriff; the EMA has only a Facebook page. County EMS
//     is headquartered in Peebles, not West Union.
//   * Several bodies that serve the county sit across the line in Brown County
//     (ABCAP, the Farm Bureau office, OhioMeansJobs' parent) or beyond (ADAMHS
//     board in Portsmouth, Hospice of Hope in Maysville KY, Southern Ohio ESC in
//     Wilmington). All are flagged in their descriptions.
//   * Adams County is in the Cincinnati TV market; no station is licensed to or
//     based in the county, and WRAC 103.1 is licensed to Georgetown (Brown).
//   * Shawnee State Park/Forest is in Scioto County despite appearing in local
//     hiking guides. Southern State Community College has no Adams campus.
//
// LEFT OUT rather than listed unverified: the villages of West Union, Manchester,
// Seaman, Winchester, Cherry Fork and Rome and 14 of 15 townships (no websites);
// Adams County EMA (Facebook only); Adams Soil & Water Conservation District,
// Senior Citizens Council, Family & Children First Council, Genealogical Society,
// Interfaith House and Community Care Center pantries, Adams County Shelter for
// the Homeless, Adams County Arts Council and the farmers market (no websites);
// United Way of Scioto & Adams Counties (Facebook only); Shawnee Family Health
// Center, the county's main behavioral health provider (shawneemhc.org now lands
// on an empty "Coming Soon" WordPress page); ABCAP's separate Head Start site
// (blocks fetching); Hopesource, Sunrise Treatment and PATH (no first-party Adams
// County page); any Habitat affiliate (none confirmed serving the county); the
// ODNR Adams Lake State Nature Preserve page (returns no content); the Manchester
// Islands of the Ohio River Islands NWR (no reachable page).

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Adams County Auditor Property Search (Beacon)";

export const LINKS = [
  // ---------- Government ----------
  { name: "Adams County, Ohio", category: "Government", subcategory: "County", url: "https://adamscountyoh.gov/", description: "Official county portal (county seat West Union), with elected officials, county offices, court record search and online payments." },
  { name: "Adams County Board of Commissioners", category: "Government", subcategory: "County", url: "https://adamscountyoh.gov/commissioners/", description: "Three-member board at the County Annex, 215 North Cross Street, Suite 102 in West Union; regular sessions begin at 9:00 a.m., with weekly agendas and minutes posted on the site." },
  { name: "Adams County Offices Directory", category: "Government", subcategory: "County", url: "https://adamscountyoh.gov/county-offices/", description: "Directory of the county's 23 offices with contact names and phone numbers." },
  { name: "Adams County Job and Family Services", category: "Government", subcategory: "County", url: "https://adamscountyoh.gov/job-and-family-services/", description: "County JFS at 482 Rice Drive in West Union, which also houses the Child Support Enforcement Agency." },
  { name: "Adams County Children Services", category: "Government", subcategory: "County", url: "http://adamscountychildren.org", description: "Public children services agency based at Wilson Children's Home, 300 North Wilson Drive in West Union." },
  { name: "Adams County Board of Developmental Disabilities", category: "Government", subcategory: "County", url: "http://www.adamscbdd.org/", description: "County board of DD at 116 W. Mulberry Street in West Union — early intervention, service and support administration, family support and waiver services." },
  { name: "Adams County Coroner", category: "Government", subcategory: "County", url: "https://adamscountyoh.gov/coroner/", description: "Coroner's office at the courthouse, 110 West Main Street in West Union." },
  { name: "Adams County Auditor", category: "Government", subcategory: "Auditor", url: "https://adamscountyauditor.org/", description: "Office of Auditor David Gifford at the courthouse, 110 West Main Street, Room 104 in West Union — real estate, CAUV, homestead, dog and vendor licenses, weights and measures." },
  { name: "Adams County Auditor Property Search", category: "Government", subcategory: "GIS", url: "https://beacon.schneidercorp.com/Application.aspx?AppID=1135&LayerID=28756&PageTypeID=2&PageID=11960", description: "The Auditor's parcel search, sales search and map on Beacon (Schneider Geospatial) — the service this project's parcel data is built from." },
  { name: "Adams County Tax Map / GIS Office", category: "Government", subcategory: "GIS", url: "https://adamscountyoh.gov/tax-map-gis-office/", description: "Tax Map and GIS office, under the County Engineer." },
  { name: "Adams County Treasurer", category: "Government", subcategory: "Treasurer", url: "https://adamscountyoh.gov/treasurer/", description: "Office of Treasurer Lisa A. Newman at the courthouse, 110 West Main Street, Room 138 in West Union, open weekdays 8:00–4:00." },
  { name: "Adams County Treasurer — Pay Property Tax Online", category: "Government", subcategory: "Treasurer", url: "https://payments.lexisnexis.com/oh/adams/treasurer", description: "The Treasurer's online payment portal for real estate and mobile home tax bills, by parcel number (3% processing fee)." },
  { name: "Adams County Recorder", category: "Government", subcategory: "Recorder", url: "https://adamscountyoh.gov/recorder/", description: "Office of Recorder Chris Moore at the courthouse, 110 West Main Street, Room 133 in West Union." },
  { name: "Adams County Recorder — Public Records Search", category: "Government", subcategory: "Recorder", url: "https://adams.dts-oh.com/PaxWorld/", description: "The Recorder's online document search (PAX World), with AlertMe real estate fraud alerts." },
  { name: "Adams County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/adams/", description: "County elections office at 923 Sunrise Ave., Room 101 in West Union, open 8:30–4:00." },
  { name: "Adams County Courts", category: "Government", subcategory: "Courts", url: "http://adamscountycourts.com/", description: "Combined site for the Common Pleas Court, County Court, Clerk of Courts, Probation, Jury and CASA, all at the courthouse, 110 West Main St. in West Union, with a court record search." },
  { name: "Adams County Common Pleas Court", category: "Government", subcategory: "Courts", url: "https://adamscountycourts.com/CommonPleasCourt/home/", description: "The county's trial court, with General, Domestic Relations, Juvenile and Probate divisions under a single judge." },
  { name: "Adams County Common Pleas Court — Forms and Local Rules", category: "Government", subcategory: "Courts", url: "https://sites.google.com/view/adamscountycommonpleas/home", description: "Court-maintained site with local rules, forms and checklists for every division, including probate and juvenile, plus legal notices and self-help resources." },
  { name: "Adams County Court", category: "Government", subcategory: "Courts", url: "https://adamscountycourts.com/CountyCourt/home/", description: "The county court for small claims, misdemeanor and traffic cases, in the courthouse basement — Adams has a County Court rather than a municipal court." },
  { name: "Adams County Clerk of Courts", category: "Government", subcategory: "Courts", url: "https://adamscountycourts.com/ClerkOfCourts/home/", description: "Office of Clerk Larry Heller, Legal Division, at 110 West Main St., Room 207 in West Union; also a passport acceptance agent." },
  { name: "Adams County Clerk of Courts — Title Department", category: "Government", subcategory: "Courts", url: "https://adamscountyoh.gov/clerk-of-courts-title-department/", description: "The Clerk's auto title department." },
  { name: "Adams County Probation Department", category: "Government", subcategory: "Courts", url: "https://adamscountycourts.com/ProbationDepartment/home/", description: "Adult and juvenile probation for the county courts." },
  { name: "Adams County CASA", category: "Government", subcategory: "Courts", url: "https://adamscountycourts.com/CASA/home/", description: "Court Appointed Special Advocates program of the Adams County courts." },
  { name: "Adams County Prosecutor", category: "Government", subcategory: "Courts", url: "https://adamscountyoh.gov/prosecutor/", description: "Office of Prosecutor Ariana Bowles Norris at the courthouse, 110 West Main St., Room 112 in West Union." },
  { name: "Adams County Sheriff", category: "Government", subcategory: "Public Safety", url: "https://adamscountyoh.gov/sheriff/", description: "Office of Sheriff Kenny Dick at the courthouse, 110 West Main Street in West Union; the Sheriff also runs the county's 9-1-1 dispatch." },
  { name: "Adams County Sheriff's Office — Inmate List", category: "Government", subcategory: "Public Safety", url: "http://www.adamscountyso.com/", description: "The Sheriff's Office website, mainly the current jail inmate list." },
  { name: "Adams County EMS", category: "Government", subcategory: "Public Safety", url: "https://adamscountyemsoh.gov/", description: "The county's advanced-life-support ambulance service, headquartered at 150 Marble Furnace Rd. in Peebles." },
  { name: "Adams County Dog and Kennel Department", category: "Government", subcategory: "Public Safety", url: "https://adamscountyoh.gov/dog-and-kennel-department/", description: "County dog warden and kennel at 13543 State Route 41 in West Union." },
  { name: "Adams County Engineer", category: "Government", subcategory: "Public Works", url: "https://adamscountyoh.gov/engineer/", description: "Office of Engineer Lee Pertuset at 75 Willow Drive in West Union, responsible for county roads and bridges." },
  { name: "Adams County Economic & Community Development", category: "Government", subcategory: "Planning", url: "http://www.adamscountyohecd.com/", description: "County ECD office at the Annex, 215 N. Cross Street, Suite 101 in West Union — business incentives and financing, grants administration, fair housing, and the county Land Bank and Community Improvement Corporation." },
  { name: "Adams County Veterans Service Office", category: "Government", subcategory: "Veterans", url: "https://adamscountyoh.gov/adams-county-veterans-service-office/", description: "Veterans service office at the Annex, 215 North Cross St., Room 112 in West Union." },
  { name: "Alexander Salamon Airport", category: "Government", subcategory: "Transit", url: "https://adamscountyoh.gov/alexander-salamon-airport/", description: "County airport at 3399 Cross Rd. in Winchester, run by the Adams County Airport Authority." },
  { name: "Village of Peebles", category: "Government", subcategory: "Village", url: "https://www.peeblesoh.gov/", description: "Village offices at 1 Simmons Avenue in Peebles, with council minutes, ordinances, the police department and utility payments — the only Adams County village with its own website." },
  { name: "Tiffin Township", category: "Government", subcategory: "Township", url: "https://tiffintwpadams.us/", description: "Trustees' site for Tiffin Township, which meets at the township building on State Route 125 near West Union — the only one of the county's 15 townships with a website." },
  // ---------- Education ----------
  { name: "Adams County/Ohio Valley School District", category: "Education", subcategory: "K-12", url: "https://www.ovsd.us/", description: "Public district for most of the county, headquartered at 141 Lloyd Rd. in West Union, with North Adams, Peebles and West Union elementary and high schools, the Ohio Valley Career & Technical Center and Adams Virtual Academy." },
  { name: "West Union High School", category: "Education", subcategory: "K-12", url: "https://www.ovsd.us/o/wuhs", description: "Ohio Valley district high school at 97 Dragon Lair Dr. in West Union." },
  { name: "North Adams High School", category: "Education", subcategory: "K-12", url: "https://www.ovsd.us/o/nahs", description: "Ohio Valley district high school at 96 Green Devil Dr. in Seaman." },
  { name: "Peebles High School", category: "Education", subcategory: "K-12", url: "https://www.ovsd.us/o/phs", description: "Ohio Valley district junior/senior high school at 144 Peebles Indian Dr. in Peebles." },
  { name: "Manchester Local Schools", category: "Education", subcategory: "K-12", url: "https://www.mlsd.us/", description: "Separate public district for the Manchester area on the Ohio River, with its office at 130 Wayne Frye Drive in Manchester and an elementary and high school." },
  { name: "Ohio Valley Career & Technical Center", category: "Education", subcategory: "Career Center", url: "https://www.ovsd.us/o/ovctc", description: "The county's career-technical school at 175 Lloyd Rd. in West Union, part of the Ohio Valley district." },
  { name: "Southern Ohio Educational Service Center", category: "Education", subcategory: "ESC", url: "https://www.southernohioesc.org/", description: "ESC serving districts in Adams, Clinton, Fayette and Highland counties, headquartered at 3321 Airborne Road in Wilmington." },
  { name: "Adams County Christian School", category: "Education", subcategory: "Private School", url: "https://www.eaglesaccs.com/", description: "K-12 Christian school at 187 Willow Drive in West Union." },
  { name: "ABCAP Head Start", category: "Education", subcategory: "Preschool", url: "https://www.abcap.net/head-start.html", description: "Free Head Start preschool for 3- and 4-year-olds, run by Adams Brown Community Action Partnership, with Adams County centers in West Union, Peebles and Manchester." },
  { name: "Adams County Public Library", category: "Education", subcategory: "Library", url: "https://www.adamscolibrary.org/", description: "County district library with branches in West Union (212 East Sparks Street), Manchester (401 Pike Street), Peebles (157 High Street) and Seaman (North Adams)." },
  // ---------- Health ----------
  { name: "Adams County Regional Medical Center", category: "Health", subcategory: "Hospital", url: "https://www.acrmcoh.com/", description: "25-bed critical access hospital at 230 Medical Center Dr. in Seaman, with a 24-hour emergency room, surgery, imaging, cardiology, rehabilitation and a five-bed inpatient hospice unit." },
  { name: "ACRMC Family Medicine Clinics", category: "Health", subcategory: "Clinic", url: "https://www.acrmcoh.com/locations", description: "The hospital's family medicine clinics in West Union (11100 St. Rt. 41), Peebles (154 Elliott Avenue) and Winchester (19262 St. Rt. 136)." },
  { name: "HealthSource of Ohio — Seaman", category: "Health", subcategory: "Clinic", url: "https://healthsourceofohio.org/locations/healthsource-seaman-pediatrics-family-practice-dental", description: "Federally funded community health center at 218 Stern Drive in Seaman — family practice, pediatrics, walk-in hours, pharmacy and a sliding fee program." },
  { name: "Adams County Health Department", category: "Health", subcategory: "Public Health", url: "http://www.adamscountyhealth.org/", description: "The county's general health district at 560 Rice Drive in West Union — immunizations, communicable disease control, school nursing, environmental health, emergency preparedness and vital statistics." },
  { name: "ADAMHS Board of Adams, Lawrence and Scioto Counties", category: "Health", subcategory: "Mental Health", url: "https://www.adamhsals.org/", description: "The three-county mental health and addiction services planning board, at 919 7th Street in Portsmouth, with a provider finder and 24-hour crisis line." },
  { name: "The Counseling Center — West Union", category: "Health", subcategory: "Mental Health", url: "https://thecounselingcenter.org/west-union-ohio", description: "Mental health, addiction treatment and primary care at 508 E. Main St. in West Union, from the Portsmouth-based provider." },
  { name: "Hospice of Hope", category: "Health", subcategory: "Hospice", url: "https://hospiceofhope.com/", description: "Nonprofit hospice based in Maysville, Kentucky, serving Adams County and six other Ohio counties; it runs the inpatient hospice unit at Adams County Regional Medical Center." },
  // ---------- Business & Economy ----------
  { name: "Adams County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://adamscountyohchamber.com", description: "Chamber founded in 1989 at 107 E. Walnut Street in West Union, with a member directory, events and the county Hall of Fame." },
  { name: "Ohio Southeast — Adams County", category: "Business & Economy", subcategory: "Economic Development", url: "https://ohiose.com/data-and-resources/counties/adams", description: "The regional economic development organization's Adams County profile for site selectors — population, income, highways (US 52, OH 32) and primary industries." },
  { name: "OhioMeansJobs Adams & Brown Counties", category: "Business & Economy", subcategory: "Workforce", url: "https://www.omjadamsbrown.org/", description: "Job-seeker and employer services for the two counties, run as a division of ABCAP, with an Adams County office in Winchester." },
  { name: "OSU Extension — Adams County", category: "Business & Economy", subcategory: "Agriculture", url: "https://adams.osu.edu/", description: "Ohio State University Extension office at 836 Boyd Ave. in West Union — agriculture, family and consumer sciences, community development and 4-H." },
  { name: "Adams County Farm Bureau", category: "Business & Economy", subcategory: "Agriculture", url: "https://ofbf.org/counties/Adams/", description: "The county Farm Bureau's page on the Ohio Farm Bureau Federation site; its office is shared with Brown County in Georgetown." },
  { name: "Adams Rural Electric Cooperative", category: "Business & Economy", subcategory: "Utility", url: "https://www.adamsrec.com/", description: "Member-owned electric cooperative at 4800 State Route 125 in West Union, with online bill pay and an outage map." },
  // ---------- Community & Social ----------
  { name: "Adams Brown Community Action Partnership", category: "Community & Social", subcategory: "Food & Assistance", url: "https://abcap.net", description: "Community action agency for Adams and Brown counties, headquartered at 406 West Plum Street in Georgetown — Head Start, WIC, senior meals and home care, weatherization and energy assistance, housing, emergency services and Adams Brown Mobility transit." },
  { name: "Adams County Community Foundation", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.accfo.org", description: "Community foundation in West Union building endowed and donor-advised funds for the county, in partnership with the Scioto Foundation; more than 200 scholarships and 70 grants awarded." },
  { name: "Edge of Appalachia — Adams County Fund", category: "Community & Social", subcategory: "Nonprofit", url: "https://appalachianohio.org/AdamsCountyFund/", description: "Annual grant and scholarship fund for Adams County residents and organizations, held by the Foundation for Appalachian Ohio." },
  { name: "Humane Society of Adams County", category: "Community & Social", subcategory: "Animal Welfare", url: "https://www.adamscountyanimals.org", description: "West Union-based nonprofit shelter with adoption and foster programs, surrender and cruelty reporting; not affiliated with the Humane Society of the United States." },
  // ---------- Recreation & Tourism ----------
  { name: "Adams County Travel & Visitors Bureau", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://adamscountytravel.org", description: "County visitors bureau at 14633 State Route 41 in West Union, publishing the visitors guide and hiker's guide." },
  { name: "Adams County Nature Preserves & Hiking Guide", category: "Recreation & Tourism", subcategory: "Nature Preserve", url: "https://adamscountytravel.org/outdoors/nature-preserves-hiking/", description: "The visitors bureau's guide to the county's preserves and trails — Adams Lake, the Buckeye Trail, Chaparral Prairie, Davis Memorial, Edge of Appalachia, Johnson Ridge, Serpent Mound, Shoemaker and Whipple." },
  { name: "Adams Lake State Park", category: "Recreation & Tourism", subcategory: "State Park", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/adams-lake-state-park", description: "ODNR's small lake park near West Union, originally the village water supply — fishing, paddling, picnicking and a paved lakeside path." },
  { name: "Chaparral Prairie State Nature Preserve", category: "Recreation & Tourism", subcategory: "Nature Preserve", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/chaparral-prairie-state-nature-preserve", description: "130-acre ODNR preserve of globally rare post oak opening habitat with over two miles of trails." },
  { name: "Davis Memorial State Nature Preserve", category: "Recreation & Tourism", subcategory: "Nature Preserve", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/davis-memorial-state-nature-preserve", description: "ODNR preserve known for its dolomite geology and spring wildflowers." },
  { name: "Whipple State Nature Preserve", category: "Recreation & Tourism", subcategory: "Nature Preserve", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/whipple-state-nature-preserve", description: "448-acre ODNR preserve with dolomite cliffs, limestone prairie openings and 2.2 miles of trails." },
  { name: "Johnson Ridge State Nature Preserve", category: "Recreation & Tourism", subcategory: "Nature Preserve", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/johnson-ridge-state-nature-preserve", description: "208-acre ODNR preserve near West Union with oak-hickory woods and a post oak opening prairie." },
  { name: "Shoemaker State Nature Preserve", category: "Recreation & Tourism", subcategory: "Nature Preserve", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/shoemaker-state-nature-preserve", description: "22-acre ODNR preserve with dolomite cliffs, two natural arches and a 1.5-mile trail." },
  { name: "Edge of Appalachia Preserve System (Cincinnati Museum Center)", category: "Recreation & Tourism", subcategory: "Nature Preserve", url: "https://www.cincymuseum.org/?p=910", description: "The 20,000-acre Richard & Lucile Durrell Edge of Appalachia Preserve System at 4274 Waggoner Riffle Road in West Union, co-owned with The Nature Conservancy; its Eulett Center hosts talks and research lodging." },
  { name: "Edge of Appalachia Preserve System (The Nature Conservancy)", category: "Recreation & Tourism", subcategory: "Nature Preserve", url: "https://www.nature.org/en-us/get-involved/how-to-help/places-we-protect/edge-of-appalachia-preserve-system/", description: "The Conservancy's page for the preserve system's 11 contiguous preserves, with the Creek's Bend canoe access and Mackenzie Run boat ramp on Waggoner Riffle Road." },
  { name: "Ohio River Bluffs Preserve", category: "Recreation & Tourism", subcategory: "Nature Preserve", url: "https://arcofappalachia.org/ohio-river-bluffs", description: "Arc of Appalachia's 300-acre preserve at 400 Gilkison Hollow Rd. in Manchester, with sunrise-to-sunset hiking along limestone bluffs known for spring wildflowers." },
  { name: "Arc of Appalachia", category: "Recreation & Tourism", subcategory: "Nature Preserve", url: "https://arcofappalachia.org/", description: "Land trust headquartered in Bainbridge (Ross County) that owns several Adams County preserves — Ohio River Bluffs, Kamama Prairie, Quiverheart Gorge and Chalet Nivale." },
  { name: "Serpent Mound", category: "Recreation & Tourism", subcategory: "Historic Site", url: "https://www.ohiohistory.org/visit/browse-historical-sites/serpent-mound/", description: "The prehistoric effigy mound and museum at 3850 State Route 73 in Peebles, operated directly by Ohio History Connection since 2021." },
  { name: "Adams County Fair", category: "Recreation & Tourism", subcategory: "Fair", url: "https://adamscofair.com", description: "Annual fair of the Adams County Agricultural Society at the fairgrounds, 836 Boyd Avenue in West Union, held in mid-July." },
  { name: "Adams County Heritage Center", category: "Recreation & Tourism", subcategory: "Museum", url: "https://achs-ohio.org", description: "The Adams County Historical Society's museum, genealogical collection, historic post office and log house at 262 Heritage Way in West Union, open Thursdays and Saturdays." },
  { name: "Buckeye Trail — West Union Section", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.buckeyetrail.org/sections/west-union", description: "The Buckeye Trail Association's 58.5-mile West Union section through Adams and Brown counties, crossing the Edge of Appalachia Preserve." },
  { name: "Adams County Amish Bird Symposium", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://adamscountytravel.org/what-to-do/adams-county-bird-symposium/", description: "Annual symposium since 2004 in the Wheat Ridge Amish community, with speakers, vendors, live birds and field trips." },
  { name: "Murphin Ridge Inn", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://www.themurphinridgeinn.com", description: "Country inn on 142 acres at 750 Murphin Ridge Road in West Union, in the county's Amish country, with rooms, cabins, a dining house and a trail loop." },
  { name: "Yoder's Bakery & Furniture", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://www.yodersbakeryandfurniture.com/", description: "Wheat Ridge Amish store at 2621 Burnt Cabin Rd. in Seaman, formerly Keim Family Market — furniture, baked goods, deli and bulk foods." },
  // ---------- News & Media ----------
  { name: "The People's Defender", category: "News & Media", subcategory: "Newspaper", url: "https://peoplesdefender.com", description: "West Union weekly newspaper covering Adams County news, obituaries and sports, with an e-edition." },
  { name: "The Informer", category: "News & Media", subcategory: "Newspaper", url: "https://informerpress.com", description: "Peebles-based county weekly; its website currently shows only a notice that a new online edition is under development." },
];
