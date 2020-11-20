import csv
from collections import defaultdict
import json

# 1. use defaultdict everywhere


def read_csv(filename):
    """
    this function converts the raw data
       into dictionary of row and columns

    Parameters:
    (filename): name of csvfile

    Returns:
    dict : Dictionary format of data
   """

    fields = []
    rows = []
    # reading csv file
    with open(filename, 'r', encoding='Windows-1252') as csvfile:
        # creating a csv reader object
        csvreader = csv.reader(csvfile)
        # extracting field names through first row
        fields = next(csvreader)
        for row in csvreader:
            rows.append(row)
        # field contains column name and row contains value of column
    data = {}
    # by making dictionary it becomes easy to find value of particular column
    for i in range(len(fields)):
        l1 = []
        for j in range(len(rows)):
            l1.append(rows[j][i])
        data[fields[i]] = l1
    return data


def get_json1(data):
    """
    show the bar plot of Authorized capital count and range
       x-Axis defines the range values
       y-Axis shows the count per range

    Parameters:
    data (dict): dataset for plotting

   """
    values_of_authorized_cap_column = []
    for i in data['AUTHORIZED_CAP']:
        values_of_authorized_cap_column.append(float(i))  # storing floar value

    # making xlabels list for storing the name which we want to give in barplot
    xlabels = ['<= 1L', '1L to 10L', '10L to 1Cr', '1Cr to 10Cr', '> 10Cr']
    # making empty dictionary according to the value asked in ques
    dict_authorized_count = defaultdict(int)

    for i in values_of_authorized_cap_column:
        if i <= 100000:
            dict_authorized_count[xlabels[0]] += 1
        elif i > 100000 and i <= 1000000:
            dict_authorized_count[xlabels[1]] += 1
        elif i > 1000000 and i <= 10000000:
            dict_authorized_count[xlabels[2]] += 1
        elif i > 10000000 and i <= 100000000:
            dict_authorized_count[xlabels[3]] += 1
        elif i > 100000000:
            dict_authorized_count[xlabels[4]] += 1

    arrange_dict = defaultdict()
    for i in xlabels:
        arrange_dict[i] = dict_authorized_count[i]
    out_file = open("authorized_company_cap1.json", 'w')
    json.dump(arrange_dict, out_file, indent=4)
    out_file.close()


def get_json2(data):
    """
    show the bar plot of Registration year count and year
       x-Axis defines the year
       y-Axis shows the registration count

    Parameters:
    data (dict): dataset for plotting
    """

    dictionary_for_date_count = defaultdict(int)
    for i in data['DATE_OF_REGISTRATION']:
        if i != 'NA' and int(i[-4:]) <= 2020 and int(i[-4:]) >= 2000:
            dictionary_for_date_count[int(i[-4:])] += 1

    # we also have to check date is not null otherwise throw error
    # in above code i am taking year between 2000 and 2020
    # date is in dd-mm-yyyy format so i extracted last 4 and convert into int
    # adding the count to year dictionary

    out_file = open("count_of_registration.json", 'w')
    json.dump(dictionary_for_date_count, out_file, indent=4)
    out_file.close()


def get_json3(data):
    """
    show the bar plot of Top 10 Principal Activity
       count in year 2015
       x-Axis defines the count
       y-Axis shows the Principal Activity name

    Parameters:
    data (dict): dataset for plotting
    """

    # storing the index for 2015 year
    date_register = data['DATE_OF_REGISTRATION']
    l5 = []
    for i in range(len(date_register)):
        if date_register[i] != 'NA' and int(date_register[i][-4:]) == 2015:
            l5.append(i)

    principal_list = data['PRINCIPAL_BUSINESS_ACTIVITY_AS_PER_CIN']
    principal_item_count = defaultdict(int)
    # i am counting the count of principal item for 2015 year
    for i in l5:
        principal_item_count[principal_list[i]] += 1

    sorted_10 = dict(sorted(principal_item_count.items(),
                     key=lambda kv: kv[1]))
    # Sort them according to the count of activity
    out_file = open("principal_top_ten_count.json", 'w')
    json.dump(sorted_10, out_file, indent=4)
    out_file.close()


def get_json4(data):
    """
    show the grouped bar plot of Principal Activity
       for ten years
       x-Axis defines the year
       y-Axis shows the count of Activity

    Parameters:
    data (dict): dataset for plotting{}
   """

    date_Regi = data['DATE_OF_REGISTRATION']
    principal_list = data['PRINCIPAL_BUSINESS_ACTIVITY_AS_PER_CIN']
    years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010]
    # taking any 10 years
    final_list = defaultdict()
    # final dictionary contains principal activity dictionary of that year
    for year in years:
        l5 = []
        for i in range(len(date_Regi)):
            if (date_Regi[i] != 'NA' and int(date_Regi[i][-4:]) == year):
                l5.append(i)
        d5 = defaultdict(int)
        for i in l5:
            d5[principal_list[i]] += 1
        final_list[year] = d5

    p_b_a = ['Transport storage and communications',
             'Construction',
             'Manufacturing',
             'Health and social work',
             'Financial intermediation']
    # taking any 5 random principal activity to show in Stacked Bar Plot
    # TODO: Combine with for loop and dict

    buisness_dict_count = defaultdict(list)
    for year in years:
        for i in p_b_a:
            buisness_dict_count[i].append(final_list[year][i])
    buisness_dict_count['year'] = years
    out_file = open("principal_buisness_activity.json", 'w')
    json.dump(buisness_dict_count, out_file, indent=4)
    out_file.close()


if __name__ == '__main__':
    filename = "Data_Gov_Maharashtra.CSV"
    data = read_csv(filename)
    get_json1(data)
    get_json2(data)
    get_json3(data)
    get_json4(data)
