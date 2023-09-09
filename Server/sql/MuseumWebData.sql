USE [MuseumWeb]
GO
SET IDENTITY_INSERT [dbo].[Role] ON 
GO
INSERT [dbo].[Role] ([role_id], [role_name]) VALUES (1, N'ADMIN')
GO
INSERT [dbo].[Role] ([role_id], [role_name]) VALUES (2, N'MANAGER')
GO
INSERT [dbo].[Role] ([role_id], [role_name]) VALUES (3, N'MEMBER')
GO
SET IDENTITY_INSERT [dbo].[Role] OFF
GO
INSERT [dbo].[Account] ([account_id], [email], [account_name], [hash_password], [isBan], [role_id], [created_date]) VALUES (N'1', N'abcxyz@gmail.com', N'abc', N'abc', 0, 3, CAST(N'2023-06-06' AS Date))
GO
SET IDENTITY_INSERT [dbo].[Tag] ON 
GO
INSERT [dbo].[Tag] ([tag_id], [tag_name]) VALUES (1, N'ancient')
GO
INSERT [dbo].[Tag] ([tag_id], [tag_name]) VALUES (2, N'statue')
GO
INSERT [dbo].[Tag] ([tag_id], [tag_name]) VALUES (3, N'fossil')
GO
INSERT [dbo].[Tag] ([tag_id], [tag_name]) VALUES (4, N'Roman')
GO
INSERT [dbo].[Tag] ([tag_id], [tag_name]) VALUES (5, N'Greek')
GO
SET IDENTITY_INSERT [dbo].[Tag] OFF
GO
INSERT [dbo].[Product] ([product_id], [product_json], [image], [video], [created_date], [created_by]) VALUES (N'90ff3498-dbc0-4116-8a9d-5d5f3f7128c3', N'[{language:"vn",title:"Hóa Thạch2",description:"Hóa Thạch trong Hang Động cổ2"},{language:"en",title:"fosill2",description:"fosill2 in acient cave2"}]', NULL, NULL, CAST(N'2023-09-09' AS Date), NULL)
GO
INSERT [dbo].[Product] ([product_id], [product_json], [image], [video], [created_date], [created_by]) VALUES (N'fe3bc79e-1323-40f3-b639-310507f9ed1a', N'[{language:"vn",title:"Trống Đồng",description:"Trống Đồng Đông Sơn"},{language:"en",title:"bronze drum",description:"Dong Son bronze drum"}]', NULL, NULL, CAST(N'2023-09-09' AS Date), NULL)
GO
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'1e1773d4-8d35-4131-8141-1792749a140a', N'9e81895418019ae1d1ee13056681ff86eb89ceef41ee2776c0a20e7b1e169224', CAST(N'2023-09-08T08:36:05.8778152+00:00' AS DateTimeOffset), N'0_init', N'', NULL, CAST(N'2023-09-08T08:36:05.8778152+00:00' AS DateTimeOffset), 0)
GO
