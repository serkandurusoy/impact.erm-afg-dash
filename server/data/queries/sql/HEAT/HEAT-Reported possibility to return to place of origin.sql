SELECT 
    COUNT(IF(`S3_GEN_ASSESSq3_4_can_go_origin_place` = 'yes',
        1,
        NULL)) / COUNT(*) * 100,
    COUNT(IF(`S3_GEN_ASSESSq3_4_can_go_origin_place` = 'no',
        1,
        NULL)) / COUNT(*) * 100
FROM
    impact_1.heat;

/*
	!= '' => To be replaced with N/A
*/
