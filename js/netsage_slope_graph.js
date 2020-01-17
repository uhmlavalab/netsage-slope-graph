/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

// var data = [25, 20, 10, 12, 15];

var data = {
    "buckets": [
        {
            "key": "National Energy Research Scientific Computing Center",
            "doc_count": 21744,
            "1": {
                "value": 9.19439308787672E14
            },
            "2": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 4,
                "buckets": [
                    {
                        "key": "National Energy Research Scientific Computing Center",
                        "doc_count": 21632,
                        "1": {
                            "value": 1.1472286176812E14
                        }
                    },
                    {
                        "key": "ESnet",
                        "doc_count": 16,
                        "1": {
                            "value": 1.1298797055E11
                        }
                    },
                    {
                        "key": "Arizona Board of Regents",
                        "doc_count": 16,
                        "1": {
                            "value": 3.5857907069E10
                        }
                    },
                    {
                        "key": "Colorado State University",
                        "doc_count": 3,
                        "1": {
                            "value": 1.7461829632E10
                        }
                    },
                    {
                        "key": "University Corporation for Atmospheric Research",
                        "doc_count": 14,
                        "1": {
                            "value": 1.4479205633E10
                        }
                    },
                    {
                        "key": "San Diego Supercomputer Center",
                        "doc_count": 6,
                        "1": {
                            "value": 1.2115480576E10
                        }
                    },
                    {
                        "key": "University of California at Berkeley",
                        "doc_count": 36,
                        "1": {
                            "value": 1.1141668303E10
                        }
                    },
                    {
                        "key": "Jisc Services Limited",
                        "doc_count": 14,
                        "1": {
                            "value": 1.876030464E9
                        }
                    },
                    {
                        "key": "University of California at Davis",
                        "doc_count": 1,
                        "1": {
                            "value": 4.80026624E8
                        }
                    },
                    {
                        "key": "High Energy Accelerator Research Organization, KEK",
                        "doc_count": 2,
                        "1": {
                            "value": 3.6110336E8
                        }
                    }
                ]
            }
        },
        {
            "key": "University Corporation for Atmospheric Research",
            "doc_count": 59998,
            "1": {
                "value": 4.0718987064968E14
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 43539,
                "buckets": [
                    {
                        "key": "The Pennsylvania State University",
                        "doc_count": 2140,
                        "1": {
                            "value": 8.993397389312E12
                        }
                    },
                    {
                        "key": "Texas A&M University",
                        "doc_count": 824,
                        "1": {
                            "value": 3.037658996582E12
                        }
                    },
                    {
                        "key": "Purdue University",
                        "doc_count": 781,
                        "1": {
                            "value": 2.536617930172E12
                        }
                    },
                    {
                        "key": "California State University, Office of the Chancellor",
                        "doc_count": 3514,
                        "1": {
                            "value": 2.213013922816E12
                        }
                    },
                    {
                        "key": "University of California, Santa Barbara",
                        "doc_count": 573,
                        "1": {
                            "value": 2.078677464064E12
                        }
                    },
                    {
                        "key": "University of Wisconsin Madison",
                        "doc_count": 2855,
                        "1": {
                            "value": 1.483993735168E12
                        }
                    },
                    {
                        "key": "University of Washington",
                        "doc_count": 2697,
                        "1": {
                            "value": 1.235329512641E12
                        }
                    },
                    {
                        "key": "Cornell University",
                        "doc_count": 1250,
                        "1": {
                            "value": 1.182719045632E12
                        }
                    },
                    {
                        "key": "University of Hawaii",
                        "doc_count": 1151,
                        "1": {
                            "value": 1.150685031476E12
                        }
                    },
                    {
                        "key": "University of Oklahoma",
                        "doc_count": 674,
                        "1": {
                            "value": 1.030617714688E12
                        }
                    }
                ]
            }
        },
        {
            "key": "UltraLight",
            "doc_count": 21105,
            "1": {
                "value": 2.84568363794432E14
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 2544,
                "buckets": [
                    {
                        "key": "Fermi National Accelerator Laboratory (Fermilab)",
                        "doc_count": 12381,
                        "1": {
                            "value": 3.0058754445312E13
                        }
                    },
                    {
                        "key": "European Organization for Nuclear Research",
                        "doc_count": 2993,
                        "1": {
                            "value": 2.699377047552E12
                        }
                    },
                    {
                        "key": "Northeast Regional Data Center",
                        "doc_count": 2173,
                        "1": {
                            "value": 4.28854751232E11
                        }
                    },
                    {
                        "key": "University of Nebraska-Lincoln",
                        "doc_count": 166,
                        "1": {
                            "value": 3.187547136E11
                        }
                    },
                    {
                        "key": "National Center for Supercomputing Applications",
                        "doc_count": 13,
                        "1": {
                            "value": 2.3687585792E11
                        }
                    },
                    {
                        "key": "University of Wisconsin Madison",
                        "doc_count": 460,
                        "1": {
                            "value": 2.28107583488E11
                        }
                    },
                    {
                        "key": "ESnet",
                        "doc_count": 9,
                        "1": {
                            "value": 2.24607092736E11
                        }
                    },
                    {
                        "key": "University of Washington",
                        "doc_count": 10,
                        "1": {
                            "value": 1.84013000704E11
                        }
                    },
                    {
                        "key": "MTA Wigner Fizikai Kutatokozpont",
                        "doc_count": 330,
                        "1": {
                            "value": 1.70911133696E11
                        }
                    },
                    {
                        "key": "Vanderbilt University",
                        "doc_count": 26,
                        "1": {
                            "value": 9.8886275072E10
                        }
                    }
                ]
            }
        },
        {
            "key": "University of Southern California",
            "doc_count": 26007,
            "1": {
                "value": 2.01633513750528E14
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 1077,
                "buckets": [
                    {
                        "key": "Amazon.com, Inc.",
                        "doc_count": 23757,
                        "1": {
                            "value": 2.0235086084096E13
                        }
                    },
                    {
                        "key": "Colorado State University",
                        "doc_count": 235,
                        "1": {
                            "value": 3.149727823872E12
                        }
                    },
                    {
                        "key": "Northwestern University",
                        "doc_count": 42,
                        "1": {
                            "value": 1.115196686336E12
                        }
                    },
                    {
                        "key": "University of Illinois at Chicago",
                        "doc_count": 3,
                        "1": {
                            "value": 1.22281156608E11
                        }
                    },
                    {
                        "key": "Penn Medicine",
                        "doc_count": 196,
                        "1": {
                            "value": 9.171842048E10
                        }
                    },
                    {
                        "key": "Duke University",
                        "doc_count": 108,
                        "1": {
                            "value": 7.4516742144E10
                        }
                    },
                    {
                        "key": "PAVLOV MEDIA INC",
                        "doc_count": 100,
                        "1": {
                            "value": 3.4749779968E10
                        }
                    },
                    {
                        "key": "Charter Communications, Inc",
                        "doc_count": 106,
                        "1": {
                            "value": 3.4166218752E10
                        }
                    },
                    {
                        "key": "University of Chicago",
                        "doc_count": 167,
                        "1": {
                            "value": 3.2485625856E10
                        }
                    },
                    {
                        "key": "The University of Auckland",
                        "doc_count": 216,
                        "1": {
                            "value": 3.0261254144E10
                        }
                    }
                ]
            }
        },
        {
            "key": "University of Texas at Austin",
            "doc_count": 3800,
            "1": {
                "value": 1.70111796696304E14
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 1710,
                "buckets": [
                    {
                        "key": "University of Texas at Austin",
                        "doc_count": 99,
                        "1": {
                            "value": 1.0928697371379E13
                        }
                    },
                    {
                        "key": "National Aeronautics and Space Administration",
                        "doc_count": 116,
                        "1": {
                            "value": 3.276393508864E12
                        }
                    },
                    {
                        "key": "Stanford University",
                        "doc_count": 593,
                        "1": {
                            "value": 2.536768927683E12
                        }
                    },
                    {
                        "key": "Texas A&M University",
                        "doc_count": 32,
                        "1": {
                            "value": 1.979614315087E12
                        }
                    },
                    {
                        "key": "California Institute of Technology",
                        "doc_count": 465,
                        "1": {
                            "value": 7.51159732263E11
                        }
                    },
                    {
                        "key": "San Diego Supercomputer Center",
                        "doc_count": 99,
                        "1": {
                            "value": 4.74669321789E11
                        }
                    },
                    {
                        "key": "National Center for Supercomputing Applications",
                        "doc_count": 128,
                        "1": {
                            "value": 4.33609699328E11
                        }
                    },
                    {
                        "key": "University of California, Los Angeles",
                        "doc_count": 516,
                        "1": {
                            "value": 4.19124617216E11
                        }
                    },
                    {
                        "key": "University of Colorado at Boulder",
                        "doc_count": 27,
                        "1": {
                            "value": 1.77364709347E11
                        }
                    },
                    {
                        "key": "University of California at Davis",
                        "doc_count": 15,
                        "1": {
                            "value": 8.1167233024E10
                        }
                    }
                ]
            }
        },
        {
            "key": "European Organization for Nuclear Research",
            "doc_count": 17851,
            "1": {
                "value": 1.36180438659072E14
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 2822,
                "buckets": [
                    {
                        "key": "UltraLight",
                        "doc_count": 7291,
                        "1": {
                            "value": 1.6298661275648E13
                        }
                    },
                    {
                        "key": "Duke University",
                        "doc_count": 41,
                        "1": {
                            "value": 1.30871865344E11
                        }
                    },
                    {
                        "key": "Merit Network Inc.",
                        "doc_count": 550,
                        "1": {
                            "value": 1.29792604672E11
                        }
                    },
                    {
                        "key": "Rutgers University",
                        "doc_count": 2147,
                        "1": {
                            "value": 9.512190208E10
                        }
                    },
                    {
                        "key": "Massachusetts Institute of Technology",
                        "doc_count": 962,
                        "1": {
                            "value": 4.842760704E10
                        }
                    },
                    {
                        "key": "Fermi National Accelerator Laboratory (Fermilab)",
                        "doc_count": 1388,
                        "1": {
                            "value": 4.23376384E10
                        }
                    },
                    {
                        "key": "Northeast Regional Data Center",
                        "doc_count": 1133,
                        "1": {
                            "value": 4.0377677824E10
                        }
                    },
                    {
                        "key": "University of Nebraska-Lincoln",
                        "doc_count": 916,
                        "1": {
                            "value": 2.7358257664E10
                        }
                    },
                    {
                        "key": "University of Minnesota",
                        "doc_count": 10,
                        "1": {
                            "value": 2.5868368896E10
                        }
                    },
                    {
                        "key": "Purdue University",
                        "doc_count": 591,
                        "1": {
                            "value": 2.183104768E10
                        }
                    }
                ]
            }
        },
        {
            "key": "NIST/U.S. Dept. of Commerce",
            "doc_count": 48692,
            "1": {
                "value": 1.23037402052928E14
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 22891,
                "buckets": [
                    {
                        "key": "Amazon.com, Inc.",
                        "doc_count": 18783,
                        "1": {
                            "value": 5.216154159104E12
                        }
                    },
                    {
                        "key": "National Aeronautics and Space Administration",
                        "doc_count": 1515,
                        "1": {
                            "value": 5.26061289472E11
                        }
                    },
                    {
                        "key": "Microsoft Corporation",
                        "doc_count": 1305,
                        "1": {
                            "value": 5.03403759616E11
                        }
                    },
                    {
                        "key": "Comcast Cable Communications, LLC",
                        "doc_count": 908,
                        "1": {
                            "value": 4.98968211456E11
                        }
                    },
                    {
                        "key": "University of Hawaii",
                        "doc_count": 48,
                        "1": {
                            "value": 4.77171623936E11
                        }
                    },
                    {
                        "key": "DoD Network Information Center",
                        "doc_count": 840,
                        "1": {
                            "value": 3.96625813504E11
                        }
                    },
                    {
                        "key": "San Diego State University",
                        "doc_count": 20,
                        "1": {
                            "value": 3.39997413376E11
                        }
                    },
                    {
                        "key": "The J. M. Smucker Co.",
                        "doc_count": 16,
                        "1": {
                            "value": 3.3890844672E11
                        }
                    },
                    {
                        "key": "Headquarters, USAISC",
                        "doc_count": 2328,
                        "1": {
                            "value": 3.16991232E11
                        }
                    },
                    {
                        "key": "ESnet",
                        "doc_count": 25,
                        "1": {
                            "value": 3.1382831616E11
                        }
                    }
                ]
            }
        },
        {
            "key": "Stanford University",
            "doc_count": 34199,
            "1": {
                "value": 1.18375100002584E14
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 3025,
                "buckets": [
                    {
                        "key": "Amazon.com, Inc.",
                        "doc_count": 14109,
                        "1": {
                            "value": 4.787977957376E12
                        }
                    },
                    {
                        "key": "Code 42 Software",
                        "doc_count": 6500,
                        "1": {
                            "value": 3.383019300864E12
                        }
                    },
                    {
                        "key": "Box.com",
                        "doc_count": 3396,
                        "1": {
                            "value": 2.266024249344E12
                        }
                    },
                    {
                        "key": "University of Colorado at Boulder",
                        "doc_count": 3159,
                        "1": {
                            "value": 1.456084754432E12
                        }
                    },
                    {
                        "key": "National Library of Medicine",
                        "doc_count": 377,
                        "1": {
                            "value": 3.83964164096E11
                        }
                    },
                    {
                        "key": "Zoom Video Communications, Inc",
                        "doc_count": 2473,
                        "1": {
                            "value": 3.17553496064E11
                        }
                    },
                    {
                        "key": "Colorado School of Mines",
                        "doc_count": 19,
                        "1": {
                            "value": 2.7744571392E11
                        }
                    },
                    {
                        "key": "Internet2",
                        "doc_count": 576,
                        "1": {
                            "value": 2.0171614208E11
                        }
                    },
                    {
                        "key": "University Corporation for Atmospheric Research",
                        "doc_count": 311,
                        "1": {
                            "value": 1.68357513763E11
                        }
                    },
                    {
                        "key": "Dropbox, Inc.",
                        "doc_count": 254,
                        "1": {
                            "value": 1.62516287488E11
                        }
                    }
                ]
            }
        },
        {
            "key": "National Center for Supercomputing Applications",
            "doc_count": 3185,
            "1": {
                "value": 1.05164422673312E14
            },
            "2": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [
                    {
                        "key": "University of Texas at Austin",
                        "doc_count": 3137,
                        "1": {
                            "value": 1.249584218994E13
                        }
                    },
                    {
                        "key": "UltraLight",
                        "doc_count": 12,
                        "1": {
                            "value": 2.82440278016E11
                        }
                    },
                    {
                        "key": "University of Hawaii",
                        "doc_count": 19,
                        "1": {
                            "value": 1.11373669376E11
                        }
                    },
                    {
                        "key": "San Diego Supercomputer Center",
                        "doc_count": 4,
                        "1": {
                            "value": 1.06649567232E11
                        }
                    },
                    {
                        "key": "Asia Pacific Advanced Network - Japan",
                        "doc_count": 4,
                        "1": {
                            "value": 5.5457593344E10
                        }
                    },
                    {
                        "key": "Australian Academic and Research Network (AARNet)",
                        "doc_count": 6,
                        "1": {
                            "value": 5.0645610496E10
                        }
                    },
                    {
                        "key": "University Corporation for Atmospheric Research",
                        "doc_count": 1,
                        "1": {
                            "value": 3.0745821184E10
                        }
                    },
                    {
                        "key": "University of California, Irvine",
                        "doc_count": 2,
                        "1": {
                            "value": 1.2398104576E10
                        }
                    }
                ]
            }
        },
        {
            "key": "Fermi National Accelerator Laboratory (Fermilab)",
            "doc_count": 52108,
            "1": {
                "value": 1.00054837791608E14
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 354,
                "buckets": [
                    {
                        "key": "UltraLight",
                        "doc_count": 28409,
                        "1": {
                            "value": 6.56885798912E12
                        }
                    },
                    {
                        "key": "University of Colorado at Boulder",
                        "doc_count": 13978,
                        "1": {
                            "value": 4.365845325824E12
                        }
                    },
                    {
                        "key": "The Regents of the University of California - University of California, San Diego.",
                        "doc_count": 4664,
                        "1": {
                            "value": 9.66018289664E11
                        }
                    },
                    {
                        "key": "Jisc Services Limited",
                        "doc_count": 2362,
                        "1": {
                            "value": 2.45020376576E11
                        }
                    },
                    {
                        "key": "Queen Mary and Westfield College, University of London",
                        "doc_count": 902,
                        "1": {
                            "value": 1.45850740736E11
                        }
                    },
                    {
                        "key": "SURFnet bv",
                        "doc_count": 257,
                        "1": {
                            "value": 8.9871107584E10
                        }
                    },
                    {
                        "key": "Deutsches Elektronen-Synchrotron DESY",
                        "doc_count": 127,
                        "1": {
                            "value": 1.8268853248E10
                        }
                    },
                    {
                        "key": "Hariduse Infotehnoloogia Sihtasutus",
                        "doc_count": 508,
                        "1": {
                            "value": 1.724685568E10
                        }
                    },
                    {
                        "key": "BELNET",
                        "doc_count": 470,
                        "1": {
                            "value": 1.6717347328E10
                        }
                    },
                    {
                        "key": "Joint Institute for Nuclear Research",
                        "doc_count": 77,
                        "1": {
                            "value": 1.4911856128E10
                        }
                    }
                ]
            }
        },
        {
            "key": "Amazon.com, Inc.",
            "doc_count": 25307,
            "1": {
                "value": 8.6139396207976E13
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 10800,
                "buckets": [
                    {
                        "key": "Stanford University",
                        "doc_count": 8078,
                        "1": {
                            "value": 3.1339336192E12
                        }
                    },
                    {
                        "key": "University of California, San Diego",
                        "doc_count": 1024,
                        "1": {
                            "value": 1.741900578816E12
                        }
                    },
                    {
                        "key": "The Fred Hutchinson Cancer Research Center",
                        "doc_count": 192,
                        "1": {
                            "value": 9.84238176256E11
                        }
                    },
                    {
                        "key": "Washington State K-20 Telecommunications Network",
                        "doc_count": 2054,
                        "1": {
                            "value": 5.97073461248E11
                        }
                    },
                    {
                        "key": "Sacramento County Office of Education",
                        "doc_count": 334,
                        "1": {
                            "value": 4.41839198208E11
                        }
                    },
                    {
                        "key": "University of Washington",
                        "doc_count": 956,
                        "1": {
                            "value": 3.62423752704E11
                        }
                    },
                    {
                        "key": "University of New Mexico",
                        "doc_count": 205,
                        "1": {
                            "value": 2.75243749376E11
                        }
                    },
                    {
                        "key": "University of California at Berkeley",
                        "doc_count": 617,
                        "1": {
                            "value": 2.46886811648E11
                        }
                    },
                    {
                        "key": "Lawrence Berkeley National Laboratory",
                        "doc_count": 318,
                        "1": {
                            "value": 2.20957212672E11
                        }
                    },
                    {
                        "key": "University of Hawaii",
                        "doc_count": 729,
                        "1": {
                            "value": 1.81691613184E11
                        }
                    }
                ]
            }
        },
        {
            "key": "California State University, Office of the Chancellor",
            "doc_count": 30569,
            "1": {
                "value": 6.8604082119968E13
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 4728,
                "buckets": [
                    {
                        "key": "University of New Mexico",
                        "doc_count": 5672,
                        "1": {
                            "value": 1.593406905344E12
                        }
                    },
                    {
                        "key": "University of Hawaii",
                        "doc_count": 5366,
                        "1": {
                            "value": 1.328296612864E12
                        }
                    },
                    {
                        "key": "New Mexico State University",
                        "doc_count": 4968,
                        "1": {
                            "value": 1.162870900736E12
                        }
                    },
                    {
                        "key": "University Corporation for Atmospheric Research",
                        "doc_count": 2575,
                        "1": {
                            "value": 9.04636931072E11
                        }
                    },
                    {
                        "key": "New Mexico Lambda Rail, Inc.",
                        "doc_count": 2009,
                        "1": {
                            "value": 5.55988123648E11
                        }
                    },
                    {
                        "key": "University of Washington",
                        "doc_count": 10,
                        "1": {
                            "value": 3.84211902464E11
                        }
                    },
                    {
                        "key": "University of New Mexico Health Sciences Center",
                        "doc_count": 1873,
                        "1": {
                            "value": 3.816499712E11
                        }
                    },
                    {
                        "key": "New Mexico Tech",
                        "doc_count": 1354,
                        "1": {
                            "value": 2.99729939456E11
                        }
                    },
                    {
                        "key": "Eastern New Mexico University",
                        "doc_count": 1381,
                        "1": {
                            "value": 2.96395309056E11
                        }
                    },
                    {
                        "key": "Box.com",
                        "doc_count": 633,
                        "1": {
                            "value": 2.7187463168E11
                        }
                    }
                ]
            }
        },
        {
            "key": "Entidad Publica Empresarial Red.es",
            "doc_count": 6896,
            "1": {
                "value": 6.2400611237888E13
            },
            "2": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [
                    {
                        "key": "UltraLight",
                        "doc_count": 4898,
                        "1": {
                            "value": 7.323730198528E12
                        }
                    },
                    {
                        "key": "National Aeronautics and Space Administration",
                        "doc_count": 256,
                        "1": {
                            "value": 3.90873101312E11
                        }
                    },
                    {
                        "key": "Northeast Regional Data Center",
                        "doc_count": 1717,
                        "1": {
                            "value": 7.7855245312E10
                        }
                    },
                    {
                        "key": "University of California, Los Angeles",
                        "doc_count": 2,
                        "1": {
                            "value": 2.869772288E9
                        }
                    },
                    {
                        "key": "Universidad de Guadalajara",
                        "doc_count": 12,
                        "1": {
                            "value": 2.51542528E9
                        }
                    },
                    {
                        "key": "Jet Propulsion Laboratory",
                        "doc_count": 4,
                        "1": {
                            "value": 1.408909312E9
                        }
                    },
                    {
                        "key": "University of California at Berkeley",
                        "doc_count": 2,
                        "1": {
                            "value": 3.78011648E8
                        }
                    },
                    {
                        "key": "Internet Archive",
                        "doc_count": 2,
                        "1": {
                            "value": 3.59686144E8
                        }
                    },
                    {
                        "key": "The Chinese University of Hong Kong",
                        "doc_count": 2,
                        "1": {
                            "value": 7.5718656E7
                        }
                    },
                    {
                        "key": "Information Technology Services",
                        "doc_count": 1,
                        "1": {
                            "value": 1.0336256E7
                        }
                    }
                ]
            }
        },
        {
            "key": "ESnet",
            "doc_count": 12697,
            "1": {
                "value": 5.9155467532024E13
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 911,
                "buckets": [
                    {
                        "key": "California Institute of Technology",
                        "doc_count": 8179,
                        "1": {
                            "value": 1.827513878528E12
                        }
                    },
                    {
                        "key": "University of Hawaii",
                        "doc_count": 745,
                        "1": {
                            "value": 1.626720084225E12
                        }
                    },
                    {
                        "key": "Verein zur Foerderung eines Deutschen Forschungsnetzes e.V.",
                        "doc_count": 392,
                        "1": {
                            "value": 9.2682707968E11
                        }
                    },
                    {
                        "key": "NIST/U.S. Dept. of Commerce",
                        "doc_count": 16,
                        "1": {
                            "value": 5.56418064384E11
                        }
                    },
                    {
                        "key": "China Education and Research Network Center",
                        "doc_count": 1753,
                        "1": {
                            "value": 3.3981797376E11
                        }
                    },
                    {
                        "key": "Ulsan National Institute of Science and Technology",
                        "doc_count": 406,
                        "1": {
                            "value": 2.915628032E11
                        }
                    },
                    {
                        "key": "UltraLight",
                        "doc_count": 14,
                        "1": {
                            "value": 2.891659264E11
                        }
                    },
                    {
                        "key": "University Corporation for Atmospheric Research",
                        "doc_count": 10,
                        "1": {
                            "value": 2.20211552734E11
                        }
                    },
                    {
                        "key": "National Oceanic and Atmospheric Administration",
                        "doc_count": 247,
                        "1": {
                            "value": 2.0147390464E11
                        }
                    },
                    {
                        "key": "Australian Academic and Research Network (AARNet)",
                        "doc_count": 24,
                        "1": {
                            "value": 1.91350870016E11
                        }
                    }
                ]
            }
        },
        {
            "key": "Jisc Services Limited",
            "doc_count": 12201,
            "1": {
                "value": 5.6977922317376E13
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 7706,
                "buckets": [
                    {
                        "key": "SLAC National Accelerator Laboratory",
                        "doc_count": 955,
                        "1": {
                            "value": 1.349071653888E12
                        }
                    },
                    {
                        "key": "University Corporation for Atmospheric Research",
                        "doc_count": 487,
                        "1": {
                            "value": 1.178607135264E12
                        }
                    },
                    {
                        "key": "WIDE Project",
                        "doc_count": 76,
                        "1": {
                            "value": 8.55411084288E11
                        }
                    },
                    {
                        "key": "City University of Hong Kong",
                        "doc_count": 263,
                        "1": {
                            "value": 7.24678894592E11
                        }
                    },
                    {
                        "key": "Massachusetts Institute of Technology",
                        "doc_count": 719,
                        "1": {
                            "value": 4.799578752E11
                        }
                    },
                    {
                        "key": "Brookhaven National Laboratory",
                        "doc_count": 213,
                        "1": {
                            "value": 4.23865677824E11
                        }
                    },
                    {
                        "key": "Fermi National Accelerator Laboratory (Fermilab)",
                        "doc_count": 224,
                        "1": {
                            "value": 2.64218870784E11
                        }
                    },
                    {
                        "key": "Partners HealthCare System Inc.",
                        "doc_count": 69,
                        "1": {
                            "value": 1.70617145856E11
                        }
                    },
                    {
                        "key": "Boston University",
                        "doc_count": 287,
                        "1": {
                            "value": 1.67333955072E11
                        }
                    },
                    {
                        "key": "Yale University",
                        "doc_count": 1202,
                        "1": {
                            "value": 1.29416474112E11
                        }
                    }
                ]
            }
        },
        {
            "key": "California Institute of Technology",
            "doc_count": 32409,
            "1": {
                "value": 5.3712656244736E13
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 1583,
                "buckets": [
                    {
                        "key": "Consortium GARR",
                        "doc_count": 14752,
                        "1": {
                            "value": 2.677748682752E12
                        }
                    },
                    {
                        "key": "Renater",
                        "doc_count": 7686,
                        "1": {
                            "value": 1.285558136832E12
                        }
                    },
                    {
                        "key": "Georgia Institute of Technology",
                        "doc_count": 3552,
                        "1": {
                            "value": 9.63786625024E11
                        }
                    },
                    {
                        "key": "Amazon.com, Inc.",
                        "doc_count": 230,
                        "1": {
                            "value": 4.69628934144E11
                        }
                    },
                    {
                        "key": "University of Wisconsin Madison",
                        "doc_count": 1075,
                        "1": {
                            "value": 3.03714451456E11
                        }
                    },
                    {
                        "key": "Jisc Services Limited",
                        "doc_count": 1449,
                        "1": {
                            "value": 2.07074664448E11
                        }
                    },
                    {
                        "key": "Consorci Institut de Fisica Altes Energies",
                        "doc_count": 1168,
                        "1": {
                            "value": 2.07029334016E11
                        }
                    },
                    {
                        "key": "UNINETT AS",
                        "doc_count": 271,
                        "1": {
                            "value": 2.05770932224E11
                        }
                    },
                    {
                        "key": "University of Washington",
                        "doc_count": 459,
                        "1": {
                            "value": 7.3941618688E10
                        }
                    },
                    {
                        "key": "Box.com",
                        "doc_count": 184,
                        "1": {
                            "value": 5.3595568128E10
                        }
                    }
                ]
            }
        },
        {
            "key": "University of California, Los Angeles",
            "doc_count": 10818,
            "1": {
                "value": 5.082706755584E13
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 608,
                "buckets": [
                    {
                        "key": "Amazon.com, Inc.",
                        "doc_count": 4844,
                        "1": {
                            "value": 2.008399597568E12
                        }
                    },
                    {
                        "key": "Iowa State University",
                        "doc_count": 3308,
                        "1": {
                            "value": 1.298659656704E12
                        }
                    },
                    {
                        "key": "Box.com",
                        "doc_count": 1834,
                        "1": {
                            "value": 1.03414816768E12
                        }
                    },
                    {
                        "key": "Washington University",
                        "doc_count": 81,
                        "1": {
                            "value": 7.98742798336E11
                        }
                    },
                    {
                        "key": "University of Chicago",
                        "doc_count": 7,
                        "1": {
                            "value": 4.6906089472E11
                        }
                    },
                    {
                        "key": "ESnet",
                        "doc_count": 7,
                        "1": {
                            "value": 1.93879748608E11
                        }
                    },
                    {
                        "key": "University of Kansas",
                        "doc_count": 12,
                        "1": {
                            "value": 1.18169730048E11
                        }
                    },
                    {
                        "key": "Merit Network Inc.",
                        "doc_count": 39,
                        "1": {
                            "value": 9.3341892608E10
                        }
                    },
                    {
                        "key": "University of Illinois at Chicago",
                        "doc_count": 33,
                        "1": {
                            "value": 5.4123698176E10
                        }
                    },
                    {
                        "key": "Code 42 Software",
                        "doc_count": 45,
                        "1": {
                            "value": 5.0089033728E10
                        }
                    }
                ]
            }
        },
        {
            "key": "Karlsruhe Institute of Technology",
            "doc_count": 5213,
            "1": {
                "value": 4.9750870892544E13
            },
            "2": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [
                    {
                        "key": "UltraLight",
                        "doc_count": 3023,
                        "1": {
                            "value": 5.934534576128E12
                        }
                    },
                    {
                        "key": "Lawrence Berkeley National Laboratory",
                        "doc_count": 1532,
                        "1": {
                            "value": 2.47123421696E11
                        }
                    },
                    {
                        "key": "Northeast Regional Data Center",
                        "doc_count": 658,
                        "1": {
                            "value": 3.7200863744E10
                        }
                    }
                ]
            }
        },
        {
            "key": "Lightower Fiber Networks I, LLC",
            "doc_count": 1230,
            "1": {
                "value": 4.9016627019776E13
            },
            "2": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [
                    {
                        "key": "University of California, Los Angeles",
                        "doc_count": 1067,
                        "1": {
                            "value": 3.84819801088E12
                        }
                    },
                    {
                        "key": "San Diego Supercomputer Center",
                        "doc_count": 142,
                        "1": {
                            "value": 2.264799166464E12
                        }
                    },
                    {
                        "key": "University of California at Berkeley",
                        "doc_count": 4,
                        "1": {
                            "value": 1.1043078144E10
                        }
                    },
                    {
                        "key": "University of California, San Diego",
                        "doc_count": 11,
                        "1": {
                            "value": 1.592215552E9
                        }
                    },
                    {
                        "key": "University of California San Francisco",
                        "doc_count": 6,
                        "1": {
                            "value": 1.445906432E9
                        }
                    }
                ]
            }
        },
        {
            "key": "National Aeronautics and Space Administration",
            "doc_count": 11647,
            "1": {
                "value": 4.85434984402E13
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 4556,
                "buckets": [
                    {
                        "key": "Australian Academic and Research Network (AARNet)",
                        "doc_count": 611,
                        "1": {
                            "value": 6.9667065856E11
                        }
                    },
                    {
                        "key": "University of Colorado at Boulder",
                        "doc_count": 963,
                        "1": {
                            "value": 6.16408266752E11
                        }
                    },
                    {
                        "key": "Colorado School of Mines",
                        "doc_count": 119,
                        "1": {
                            "value": 6.03144998912E11
                        }
                    },
                    {
                        "key": "Jet Propulsion Laboratory",
                        "doc_count": 167,
                        "1": {
                            "value": 5.04518094848E11
                        }
                    },
                    {
                        "key": "Renater",
                        "doc_count": 1389,
                        "1": {
                            "value": 4.87392454656E11
                        }
                    },
                    {
                        "key": "University of Washington",
                        "doc_count": 2985,
                        "1": {
                            "value": 3.65771288576E11
                        }
                    },
                    {
                        "key": "California Institute of Technology",
                        "doc_count": 352,
                        "1": {
                            "value": 3.1286308864E11
                        }
                    },
                    {
                        "key": "NIST/U.S. Dept. of Commerce",
                        "doc_count": 50,
                        "1": {
                            "value": 2.82916001792E11
                        }
                    },
                    {
                        "key": "Asia Pacific Advanced Network - Japan",
                        "doc_count": 433,
                        "1": {
                            "value": 2.81101715456E11
                        }
                    },
                    {
                        "key": "University of California, Los Angeles",
                        "doc_count": 22,
                        "1": {
                            "value": 2.57188773888E11
                        }
                    }
                ]
            }
        },
        {
            "key": "Australian Academic and Research Network (AARNet)",
            "doc_count": 6188,
            "1": {
                "value": 4.8489212795904E13
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 374,
                "buckets": [
                    {
                        "key": "University of California at Berkeley",
                        "doc_count": 2737,
                        "1": {
                            "value": 2.433409032192E12
                        }
                    },
                    {
                        "key": "Woods Hole Oceanographic Institution",
                        "doc_count": 1614,
                        "1": {
                            "value": 1.16350066688E12
                        }
                    },
                    {
                        "key": "Lawrence Livermore National Laboratory",
                        "doc_count": 947,
                        "1": {
                            "value": 9.24341755904E11
                        }
                    },
                    {
                        "key": "University of California, San Diego",
                        "doc_count": 375,
                        "1": {
                            "value": 4.29441357824E11
                        }
                    },
                    {
                        "key": "Indiana University",
                        "doc_count": 30,
                        "1": {
                            "value": 3.34472383488E11
                        }
                    },
                    {
                        "key": "ESnet",
                        "doc_count": 41,
                        "1": {
                            "value": 3.22569330688E11
                        }
                    },
                    {
                        "key": "Internet Archive",
                        "doc_count": 50,
                        "1": {
                            "value": 9.855552512E10
                        }
                    },
                    {
                        "key": "Internet2",
                        "doc_count": 8,
                        "1": {
                            "value": 7.686455296E10
                        }
                    },
                    {
                        "key": "University of Hawaii",
                        "doc_count": 7,
                        "1": {
                            "value": 5.5654273024E10
                        }
                    },
                    {
                        "key": "California State University, Office of the Chancellor",
                        "doc_count": 5,
                        "1": {
                            "value": 5.3104918528E10
                        }
                    }
                ]
            }
        },
        {
            "key": "University of Hawaii",
            "doc_count": 7164,
            "1": {
                "value": 4.4867663443376E13
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 4412,
                "buckets": [
                    {
                        "key": "Indiana University",
                        "doc_count": 64,
                        "1": {
                            "value": 1.064526074936E12
                        }
                    },
                    {
                        "key": "Google LLC",
                        "doc_count": 1565,
                        "1": {
                            "value": 8.86217353216E11
                        }
                    },
                    {
                        "key": "University of Maryland",
                        "doc_count": 39,
                        "1": {
                            "value": 8.054990848E11
                        }
                    },
                    {
                        "key": "Jisc Services Limited",
                        "doc_count": 159,
                        "1": {
                            "value": 6.72854789654E11
                        }
                    },
                    {
                        "key": "California State University, Office of the Chancellor",
                        "doc_count": 160,
                        "1": {
                            "value": 2.61101290424E11
                        }
                    },
                    {
                        "key": "University of Hawaii",
                        "doc_count": 19,
                        "1": {
                            "value": 2.54782911774E11
                        }
                    },
                    {
                        "key": "Apple Inc.",
                        "doc_count": 713,
                        "1": {
                            "value": 1.8123072512E11
                        }
                    },
                    {
                        "key": "Asia Pacific Advanced Network - Japan",
                        "doc_count": 11,
                        "1": {
                            "value": 1.44592756432E11
                        }
                    },
                    {
                        "key": "Australian Academic and Research Network (AARNet)",
                        "doc_count": 11,
                        "1": {
                            "value": 1.18874152012E11
                        }
                    },
                    {
                        "key": "Internet2",
                        "doc_count": 7,
                        "1": {
                            "value": 1.03432332768E11
                        }
                    }
                ]
            }
        },
        {
            "key": "National Library of Medicine",
            "doc_count": 9691,
            "1": {
                "value": 4.481445289984E13
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 1455,
                "buckets": [
                    {
                        "key": "University of Hawaii",
                        "doc_count": 121,
                        "1": {
                            "value": 1.045230133248E12
                        }
                    },
                    {
                        "key": "Australian Academic and Research Network (AARNet)",
                        "doc_count": 1391,
                        "1": {
                            "value": 9.0281527296E11
                        }
                    },
                    {
                        "key": "University of California, San Diego",
                        "doc_count": 114,
                        "1": {
                            "value": 8.0906493952E11
                        }
                    },
                    {
                        "key": "University of British Columbia",
                        "doc_count": 529,
                        "1": {
                            "value": 5.5106843648E11
                        }
                    },
                    {
                        "key": "University of California, Santa Cruz",
                        "doc_count": 1652,
                        "1": {
                            "value": 4.42207940608E11
                        }
                    },
                    {
                        "key": "University of California, Los Angeles",
                        "doc_count": 2047,
                        "1": {
                            "value": 3.17935833088E11
                        }
                    },
                    {
                        "key": "University of California at Davis",
                        "doc_count": 1032,
                        "1": {
                            "value": 2.91020263424E11
                        }
                    },
                    {
                        "key": "Kasetsart University, Thailand",
                        "doc_count": 355,
                        "1": {
                            "value": 2.44328558592E11
                        }
                    },
                    {
                        "key": "Stanford University",
                        "doc_count": 10,
                        "1": {
                            "value": 2.44167624704E11
                        }
                    },
                    {
                        "key": "Kangwon National University",
                        "doc_count": 985,
                        "1": {
                            "value": 1.9811678464E11
                        }
                    }
                ]
            }
        },
        {
            "key": "University of California at Berkeley",
            "doc_count": 7512,
            "1": {
                "value": 4.453333321728E13
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 929,
                "buckets": [
                    {
                        "key": "Box.com",
                        "doc_count": 4560,
                        "1": {
                            "value": 3.016234078208E12
                        }
                    },
                    {
                        "key": "China Education and Research Network Center",
                        "doc_count": 301,
                        "1": {
                            "value": 7.662340736E11
                        }
                    },
                    {
                        "key": "National Energy Research Scientific Computing Center",
                        "doc_count": 39,
                        "1": {
                            "value": 6.952290304E11
                        }
                    },
                    {
                        "key": "Nanyang Technological University",
                        "doc_count": 80,
                        "1": {
                            "value": 3.31641158656E11
                        }
                    },
                    {
                        "key": "CERNET2 IX at University of Electronic Science and Technology of China",
                        "doc_count": 162,
                        "1": {
                            "value": 1.59355792384E11
                        }
                    },
                    {
                        "key": "University of Texas at Austin",
                        "doc_count": 324,
                        "1": {
                            "value": 1.02922174464E11
                        }
                    },
                    {
                        "key": "National Aeronautics and Space Administration",
                        "doc_count": 652,
                        "1": {
                            "value": 8.9988864E10
                        }
                    },
                    {
                        "key": "University of Washington",
                        "doc_count": 420,
                        "1": {
                            "value": 7.1920918528E10
                        }
                    },
                    {
                        "key": "University of Chicago",
                        "doc_count": 17,
                        "1": {
                            "value": 4.2295054336E10
                        }
                    },
                    {
                        "key": "University of Missouri - dba the Missouri Research and Education Network (MOREnet)",
                        "doc_count": 28,
                        "1": {
                            "value": 3.3068550144E10
                        }
                    }
                ]
            }
        },
        {
            "key": "Jet Propulsion Laboratory",
            "doc_count": 11272,
            "1": {
                "value": 4.194147405824E13
            },
            "2": {
                "doc_count_error_upper_bound": -1,
                "sum_other_doc_count": 502,
                "buckets": [
                    {
                        "key": "Colorado State University",
                        "doc_count": 94,
                        "1": {
                            "value": 1.82635998208E12
                        }
                    },
                    {
                        "key": "University of Colorado at Boulder",
                        "doc_count": 7865,
                        "1": {
                            "value": 1.173630606336E12
                        }
                    },
                    {
                        "key": "University of Texas at Austin",
                        "doc_count": 119,
                        "1": {
                            "value": 8.18366976E11
                        }
                    },
                    {
                        "key": "University of Wisconsin Madison",
                        "doc_count": 525,
                        "1": {
                            "value": 3.12249735168E11
                        }
                    },
                    {
                        "key": "University of Alaska",
                        "doc_count": 710,
                        "1": {
                            "value": 2.23061989376E11
                        }
                    },
                    {
                        "key": "Charter Communications",
                        "doc_count": 236,
                        "1": {
                            "value": 1.65102106624E11
                        }
                    },
                    {
                        "key": "The Ohio State University",
                        "doc_count": 367,
                        "1": {
                            "value": 1.5600278528E11
                        }
                    },
                    {
                        "key": "UNIVERSIDADE DE SAO PAULO",
                        "doc_count": 386,
                        "1": {
                            "value": 1.25480687616E11
                        }
                    },
                    {
                        "key": "Korea Telecom",
                        "doc_count": 275,
                        "1": {
                            "value": 9.1783000064E10
                        }
                    },
                    {
                        "key": "Mississippi State University",
                        "doc_count": 193,
                        "1": {
                            "value": 8.0753350656E10
                        }
                    }
                ]
            }
        }
    ]
}



console.log(data);

// PARSE DATA

var org_pairs = [];

for (i in data.buckets) {
    var source = data.buckets[i].key;
    inner_buckets = data.buckets[i][2].buckets
    for (j in inner_buckets) {
        pair = {
            "source": source,
            "dest": inner_buckets[j].key,
            "value": inner_buckets[j][1].value
        }
        org_pairs.push(pair);
    }
}

console.log(org_pairs);

let sorted_org_pairs = org_pairs.sort((a, b) => b.value - a.value)

console.log("sorted")
console.log(sorted_org_pairs);

let top_10_pairs = sorted_org_pairs.slice(0, 10);

console.log("top 10");
console.log(top_10_pairs);

// MAKE KEYS
let source_orgs = [];
let source_encoding = [];
let counter = 0;
for (i in top_10_pairs) {
    let new_org = top_10_pairs[i].source;
    let added = false;
    top_10_pairs[i].coords = [{ "x": 0 }, { "x": 1 }]
    for (j in source_orgs) {
        if (source_orgs[j] == new_org) {
            added = true;
            source_encoding.push(parseInt(j));
            top_10_pairs[i].coords[0].y = parseInt(j);
            break;
        }
    }
    if (!added) {
        source_orgs.push(new_org);
        source_encoding.push(counter);
        top_10_pairs[i].coords[0].y = counter;
        counter++;
    }
}

console.log(source_orgs)
console.log(source_encoding)

// dest keys

let dest_orgs = [];
let dest_encoding = [];
counter = 0;
for (i in top_10_pairs) {
    let new_org = top_10_pairs[i].dest;
    let added = false;
    for (j in dest_orgs) {
        if (dest_orgs[j] == new_org) {
            added = true;
            dest_encoding.push(parseInt(j));
            top_10_pairs[i].coords[1].y = parseInt(j);
            break;
        }
    }
    if (!added) {
        dest_orgs.push(new_org);
        dest_encoding.push(counter);
        top_10_pairs[i].coords[1].y = counter;
        counter++;
    }
}

console.log(dest_orgs)
console.log(dest_encoding)


// tick marks at source_orgs & dest_orgs, 
// line y values at source_encoding & dest_encoding
// line thickness relative to top_values

console.log(top_10_pairs)


// set the dimensions and margins of the graph
var margin = { top: 50, right: 30, bottom: 30, left: 60 },
    width = 1000 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");




// Add X scale
var x = d3.scaleLinear()
    .domain([0, 1])
    .range([0, width])


// Add Y axis
var y = d3.scaleLinear()
    .domain([0, 9])
    .range([0, height])

svg.append("g")
    .call(d3.axisLeft(y));
svg.append("g")
    .attr("transform", "translate(" + width + ",0)")
    .call(d3.axisRight(y));



// width scale
var w = d3.scaleLinear()
    .domain([top_10_pairs[top_10_pairs.length - 1].value, top_10_pairs[0].value])
    .range([1, 10])


// Add the lines
for (i in top_10_pairs) {
    svg.append("path")
        .datum(top_10_pairs[i].coords)
        .attr("fill", "none")
        .attr("stroke", () => {
            var alpha = w(top_10_pairs[i].value) / 5;
            var color = "rgba(51, 102, 255," + alpha + ")";
            return color;
        })
        .attr("stroke-width", w(top_10_pairs[i].value))
        .attr("d", d3.line()
            .x(function (d) { return x(d.x) })
            .y(function (d) { return y(d.y) }))
        .on("mouseover", function () {
            console.log(this);
            d3.select(this).attr("stroke", "black");
        })
        .on("mouseout", function() {
            d3.select(this).attr("stroke", () => {
                var alpha = d3.select(this).attr("stroke-width") / 5;
                var color = "rgba(51, 102, 255," + alpha + ")";
                return color;
            })
        })
}


