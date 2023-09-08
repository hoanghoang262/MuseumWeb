BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Account] (
    [account_id] VARCHAR(225) NOT NULL,
    [email] VARCHAR(225) NOT NULL,
    [account_name] NVARCHAR(225) NOT NULL,
    [hash_password] TEXT,
    [isBan] BIT CONSTRAINT [DF__Account__isBan__3D5E1FD2] DEFAULT 0,
    [role_id] INT CONSTRAINT [DF__Account__role_id__3E52440B] DEFAULT 3,
    [created_date] DATE CONSTRAINT [DF__Account__created__403A8C7D] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PK__Account__46A222CD8EBCF1A8] PRIMARY KEY CLUSTERED ([account_id])
);

-- CreateTable
CREATE TABLE [dbo].[Category] (
    [category_id] INT NOT NULL IDENTITY(1,1),
    [category_name] NVARCHAR(100) NOT NULL,
    CONSTRAINT [PK__Category__D54EE9B41BEC975F] PRIMARY KEY CLUSTERED ([category_id])
);

-- CreateTable
CREATE TABLE [dbo].[Comment] (
    [comment_id] VARCHAR(225) NOT NULL,
    [content] NTEXT NOT NULL,
    [account_id] VARCHAR(225),
    [post_id] VARCHAR(225),
    [created_date] DATE CONSTRAINT [DF__Comment__created__4D94879B] DEFAULT CURRENT_TIMESTAMP,
    [created_by] VARCHAR(225),
    CONSTRAINT [PK__Comment__E79576877C4E2C4B] PRIMARY KEY CLUSTERED ([comment_id])
);

-- CreateTable
CREATE TABLE [dbo].[Favor] (
    [account_id] VARCHAR(225),
    [product_id] VARCHAR(225)
);

-- CreateTable
CREATE TABLE [dbo].[Post] (
    [post_id] VARCHAR(225) NOT NULL,
    [title] NVARCHAR(100) NOT NULL,
    [content] NTEXT NOT NULL,
    [language] NVARCHAR(100) CONSTRAINT [DF__Post__language__46E78A0C] DEFAULT 'Vietnamese',
    [category_id] INT,
    [created_date] DATE CONSTRAINT [DF__Post__created_da__48CFD27E] DEFAULT CURRENT_TIMESTAMP,
    [created_by] VARCHAR(225),
    CONSTRAINT [PK__Post__3ED787668178EF2A] PRIMARY KEY CLUSTERED ([post_id])
);

-- CreateTable
CREATE TABLE [dbo].[Product] (
    [product_id] VARCHAR(225) NOT NULL,
    [product_name] NVARCHAR(225) NOT NULL,
    [description] NTEXT,
    [image] TEXT,
    [video] TEXT,
    [created_date] DATE CONSTRAINT [DF__Product__created__4316F928] DEFAULT CURRENT_TIMESTAMP,
    [created_by] VARCHAR(225),
    CONSTRAINT [PK__Product__47027DF5E660038A] PRIMARY KEY CLUSTERED ([product_id])
);

-- CreateTable
CREATE TABLE [dbo].[Product_Tag] (
    [product_id] VARCHAR(225),
    [tag_id] INT
);

-- CreateTable
CREATE TABLE [dbo].[Role] (
    [role_id] INT NOT NULL IDENTITY(1,1),
    [role_name] NVARCHAR(100) NOT NULL,
    CONSTRAINT [PK__Role__760965CCCD1FC4C5] PRIMARY KEY CLUSTERED ([role_id])
);

-- CreateTable
CREATE TABLE [dbo].[sysdiagrams] (
    [name] NVARCHAR(128) NOT NULL,
    [principal_id] INT NOT NULL,
    [diagram_id] INT NOT NULL IDENTITY(1,1),
    [version] INT,
    [definition] VARBINARY(max),
    CONSTRAINT [PK__sysdiagr__C2B05B61C67350EA] PRIMARY KEY CLUSTERED ([diagram_id]),
    CONSTRAINT [UK_principal_name] UNIQUE NONCLUSTERED ([principal_id],[name])
);

-- CreateTable
CREATE TABLE [dbo].[Tag] (
    [tag_id] INT NOT NULL IDENTITY(1,1),
    [tag_name] NVARCHAR(100) NOT NULL,
    CONSTRAINT [PK__Tag__4296A2B6FD0F64FB] PRIMARY KEY CLUSTERED ([tag_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Account] ADD CONSTRAINT [FK__Account__role_id__3F466844] FOREIGN KEY ([role_id]) REFERENCES [dbo].[Role]([role_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Comment] ADD CONSTRAINT [FK__Comment__created__4E88ABD4] FOREIGN KEY ([created_by]) REFERENCES [dbo].[Account]([account_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Comment] ADD CONSTRAINT [FK__Comment__post_id__4CA06362] FOREIGN KEY ([post_id]) REFERENCES [dbo].[Post]([post_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Favor] ADD CONSTRAINT [FK__Favor__account_i__5070F446] FOREIGN KEY ([account_id]) REFERENCES [dbo].[Account]([account_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Favor] ADD CONSTRAINT [FK__Favor__product_i__5165187F] FOREIGN KEY ([product_id]) REFERENCES [dbo].[Product]([product_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Post] ADD CONSTRAINT [FK__Post__category_i__47DBAE45] FOREIGN KEY ([category_id]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Post] ADD CONSTRAINT [FK__Post__created_by__49C3F6B7] FOREIGN KEY ([created_by]) REFERENCES [dbo].[Account]([account_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Product] ADD CONSTRAINT [FK__Product__created__440B1D61] FOREIGN KEY ([created_by]) REFERENCES [dbo].[Account]([account_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Product_Tag] ADD CONSTRAINT [FK__Product_T__produ__534D60F1] FOREIGN KEY ([product_id]) REFERENCES [dbo].[Product]([product_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Product_Tag] ADD CONSTRAINT [FK__Product_T__tag_i__5441852A] FOREIGN KEY ([tag_id]) REFERENCES [dbo].[Tag]([tag_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

