import json
from bs4 import BeautifulSoup
import requests


# ESPNCRICKINFO_URL = "https://www.espncricinfo.com/"
# TEAMS_URL = "https://www.espncricinfo.com/team"
#
# response = requests.get(url=ESPNCRICKINFO_URL)
# espn_response = response.text
#
# team_response = requests.get(url=TEAMS_URL)
# teams_response = team_response.text
#
# soup = BeautifulSoup(espn_response, "html.parser")
# team_soup = BeautifulSoup(teams_response, "html.parser")
#
# print(team_soup.h1)
#
#
# def export_to_json(files):
#     with open("league_team.json", "w") as file:
#         json.dump(files, file)
# #
#
# team_tag = team_soup.find_all( "div", class_="ds-mb-4")
# output_teams = []
# for tag in team_tag:
#     team_title = tag.find("span", class_="ds-text-typo")
#     team_names = tag.find("span", class_="ds-text-title-xs")
#     # print(team_names)
#     teams = []
#     team_icon = tag.find_all("img", class_="ds-flexds-flex-row ds-items-center ds-space-x-2 ")
#     print(team_icon)
#     icons = []
#
#     for tags in team_names:
#         tag_team = tag.text
#
#         teams.append(tag_team)
#
#     for icon in icons:
#         icon = icon.find("src")
#         icons.append(icon)
#
#     printed_teams = {
#         "title": team_title.text,
#         "teams": teams,
#         "icons": icons
#         }
#     output_teams.append(printed_teams)
#
#     # print(printed_teams)
# # export_to_json(output_teams)


# CRICK_URL = "https://www.cricbuzz.com/cricket-team/league"
# response = requests.get(url=CRICK_URL)
# women_response = response.text
# soup = BeautifulSoup(women_response, "html.parser")
#
# print(soup.title)

# teams = soup.find_all("div", class_="cb-team-item")
# for team in teams:
# flag_link = soup.find_all("img",  class_="cb-lst-img")
# team_name_link = soup.find_all("a", class_="cb-team-item-text-inner")
# # print(team_name_link)
# flags = []
# names= []
# names_link=[]
# for flag in flag_link:
#     flag_link_href = flag.get("src")
#     flags.append(flag_link_href)
#         # print(flags)
#
# for name in team_name_link:
#     name_link = name.text
#     name_text_link = name.get("href")
#     names.append(name_link)
#     names_link.append(name_text_link)
#     # print(names)
# output_teams = [
#     names,
#     flags,
#     names_link
#     ]
# # print(output_teams)
#
# team=[]
# for i in range(len(names)):
#     testing_team = {
#         "_id": i,
#         "title": names[i],
#         "titleLink": "https://www.cricbuzz.com"+names_link[i],
#         "link": flags[i]
#     }
#     team.append(testing_team)
#
# print(team)
# export_to_json(team)

# SCHEDULE_URL = "https://www.cricbuzz.com/cricket-schedule/upcoming-series/women"
# response = requests.get(url=SCHEDULE_URL)
# schedule_response = response.text
# schedule_soup = BeautifulSoup (schedule_response, "html.parser")
#
# print(schedule_soup.title)
#
# leauge_list = schedule_soup.find_all("div", id="women-list")
# # print(leauge_list)
# for leauge in leauge_list:
#     L_list = leauge.text
#     print(L_list)
#     export_to_json(L_list)



# teams_URL = "https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2024-1411166/bangladesh-vs-nepal-37th-match-group-d-1415737/full-scorecard"
# response = requests.get(url=teams_URL)
# canada_response= response.text
# canada_soup = BeautifulSoup(canada_response, "html.parser")
#
# player_list = canada_soup.select(selector=".ci-scorecard-table td a span span")
#
# players = []
# for player in player_list:
#     name = player.getText()
#     players.append(name)
# # print(players)
#
#
# list_player = canada_soup.select(selector=".ci-scorecard-table td a span span")
# runs = canada_soup.select(selector=".ds-w-full td strong")
# player_canada = []
# runs_canada = []
#
# # print(runs.ge)
# for player in list_player:
#     name = player.getText().replace("\\xa0" , "")
#     player_canada.append(name)
# for run in runs:
#     score = run.getText()
#     runs_canada.append(score)
#
#
# def export_to_json(files):
#     with open("WI_team.json", "a") as file:
#         json.dump(files, file)
#
#
# table_row= canada_soup.select(selector=".ci-scorecard-table tbody tr ")
# player_canada = []
# runs_canada = []
#
# for t_row in table_row:
#     # print(t_row.text)
#     list_player = t_row.select(selector="td a span span ")
#     for play in list_player:
#         name = play.getText()
#         player = {
#                         "id": "" ,
#                         "name": name,
#                         "runs":  "",
#                         "wickets":""
#                     }
#         player_canada.append(player)
#     runs = t_row.select(selector=" td strong ")
#     # print(runs)
#     for run in runs:
#         player_run = run.getText()
#         runs_canada.append(player_run)
# print(player_canada)
# print(runs_canada)
# export_to_json(player_canada)


teams_URL = "https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2024-1411166/teams"
response = requests.get(url=teams_URL)
teams_response= response.text
teams_soup = BeautifulSoup(teams_response, "html.parser")

# print(teams_soup.title)

team_names = teams_soup.select(selector=".ds-grid  a div  span")
# print(team_names)
name = []
for names in team_names:
    team_name = names.getText()
    name.append(team_name)
# print(name)

teams_images = teams_soup.select(selector=".ds-grid  a div  img")
img_link = []
for image in teams_images:
    image_link = image.get("src")
    # print(image_link)
    img_link.append(image_link)

def export_to_json(files):
    with open("t20_teams.json", "a") as file:
        json.dump(files, file)


team=[]
for i in range(len(name)):
    testing_team = {
        "_id": i,
        "team": name[i],

        "image": img_link[i]
    }
    team.append(testing_team)

print(team)
export_to_json(team)



# images_URL = "https://www.icc-cricket.com/teams/men"
# response = requests.get(url=images_URL)
# images_response= response.text
# images_soup = BeautifulSoup(images_response, "html.parser")
# print(images_soup.title)
# team_images = images_soup.select(selector=".WrapperWithBackground_wrapperWithBackground__Ldm_Y picture img ")
# print(team_images)

