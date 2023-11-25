import { z } from "zod";

export const NotionUser = z.object({
  object: z.literal("user"),
  id: z.string(),
  // Define User schema here
});

export const NotionPropertyTypes = z.enum([
  "checkbox",
  "created_by",
  "created_time",
  "date",
  "email",
  "files",
  "formula",
  "last_edited_by",
  "last_edited_time",
  "multi_select",
  "number",
  "people",
  "phone_number",
  "relation",
  "rich_text",
  "rollup",
  "select",
  "status",
  "title",
  "unique_id",
  "url",
  "verification",
]);

export const NotionColors = z.enum([
  "default",
  "gray",
  "brown",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "red",
  "gray_background",
  "brown_background",
  "orange_background",
  "yellow_background",
  "green_background",
  "blue_background",
  "purple_background",
  "pink_background",
  "red_background",
]);

const RichTextObject = z.object({
  // Additional fields for Rich Text Object
  type: z.string(), // Type of rich text object (e.g., 'text', 'mention', etc.)
  text: z.object({
    content: z.string(),
    link: z.union([z.string(), z.null()]),
  }),
  annotations: z.object({
    bold: z.boolean(),
    italic: z.boolean(),
    strikethrough: z.boolean(),
    underline: z.boolean(),
    code: z.boolean(),
    color: NotionColors,
  }),
  plain_text: z.string(),
  href: z.union([z.string(), z.null()]),
});

export const PageProperty = z.object({
  id: z.string(),
  //   type: NotionPropertyTypes,
});

const DateObject = z.object({
  start: z.union([z.string(), z.null()]), // ISO 8601 date format
  end: z.union([z.string(), z.null()]), // ISO 8601 date format or null
  time_zone: z.union([z.string(), z.null()]), // Time zone string or null
});

export const StringFormula = z.object({
  type: z.literal("string"),
  string: z.union([z.string(), z.null()]),
});

export const NumberFormula = z.object({
  type: z.literal("number"),
  number: z.union([z.number(), z.null()]),
});

export const EmailProperty = z.object({
  type: z.literal(NotionPropertyTypes.Enum.email),
  email: z.string().email(),
});

export const BooleanFormula = z.object({
  type: z.literal("boolean"),
  boolean: z.union([z.boolean(), z.null()]),
});

export const DateFormula = z.object({
  type: z.literal("date"),
  date: z.union([DateObject, z.null()]),
});

// Now, you can redefine FormulaProperty to use these individual schemas.
export const FormulaProperty = PageProperty.extend({
  formula: z.union([StringFormula, NumberFormula, BooleanFormula, DateFormula]),
});

export const DateProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.date),
  date: DateObject,
});

export const NumberProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.number),

  number: z.number().optional(),
});

export const PeopleProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.people),

  people: z.array(NotionUser),
});

export const CreatedTimeProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.created_time),
  created_time: z.string(),
});

export const CreatedByProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.created_by),
  created_by: NotionUser,
});

export const LastEditedTimeProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.last_edited_time),
  last_edited_time: z.string(),
});

export const LastEditedByProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.last_edited_by),
  last_edited_by: NotionUser,
});

export const PhoneNumberProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.phone_number),

  phone_number: z.string().optional(),
});

export const VerificationProperty = z.object({
  state: z.string(), // "verified" or "unverified"
  verified_by: z.union([NotionUser, z.null()]),
  date: z.union([
    z.object({
      start: z.union([z.string(), z.null()]),
      end: z.union([z.string(), z.null()]),
    }),
    z.null(),
  ]),
});
const NotionSelect = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(), // Enum for colors
});
export const SelectProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.select),
  select: NotionSelect,
});

export const MultiSelectProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.multi_select),
  multi_select: z.array(NotionSelect),
});

export const CheckboxProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.checkbox),
  checkbox: z.boolean(),
});

export const StatusProperty = PageProperty.extend({
  status: z.object({
    id: z.string(),
    name: z.string(),
    color: z.string(), // Enum for colors
  }),
});

export const TitleProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.title),
  title: z.array(RichTextObject),
});

export const URLProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.url),
  url: z.string(),
});

export const UniqueIDProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.unique_id),
  unique_id: z.object({
    number: z.number(),
    prefix: z.union([z.string(), z.null()]),
  }),
});

export const RichTextProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.rich_text),
  rich_text: z.array(RichTextObject),
});

export const RelationProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.relation),

  relation: z.array(
    z.object({
      id: z.string(),
    }),
  ),
  has_more: z.boolean(),
});

export const RollupProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.rollup),
  rollup: z.object({}),
});

const IconObject = z.object({
  type: z.enum(["emoji", "external", "file"]),
  emoji: z.union([z.string(), z.null(), z.undefined()]),
  external: z.union([
    z.object({
      url: z.string().url(),
    }),
    z.null(),
    z.undefined(),
  ]),
  file: z.union([
    z.object({
      url: z.string().url(),
      expiry_time: z.string(), // ISO 8601 date format
    }),
    z.null(),
  ]),
});

const FileObject = z.object({
  type: z.enum(["external", "file"]),
  external: z.union([
    z.object({
      url: z.string().url(),
    }),
    z.null(),
    z.undefined(),
  ]),
  file: z.union([
    z.object({
      url: z.string().url(),
      expiry_time: z.string(), // ISO 8601 date format
    }),
    z.null(),
    z.undefined(),
  ]),
});

export const FileProperty = PageProperty.extend({
  type: z.literal(NotionPropertyTypes.Enum.files),
  files: z.array(FileObject),
});

export const NotionProperties = z.record(
  z.union([
    CheckboxProperty,
    CreatedByProperty,
    CreatedTimeProperty,
    DateProperty,
    EmailProperty,
    FileProperty,
    FormulaProperty,
    LastEditedByProperty,
    LastEditedTimeProperty,
    MultiSelectProperty,
    NumberProperty,
    PeopleProperty,
    PhoneNumberProperty,
    RelationProperty,
    RichTextProperty,
    RollupProperty,
    SelectProperty,
    StatusProperty,
    TitleProperty,
    UniqueIDProperty,
    URLProperty,
    VerificationProperty,
    // Add other property types if necessary
  ]),
);

export const NotionCover = z.union([FileObject, z.null()]);
export const NotionIcon = z.union([IconObject, z.null()]);
export const NotionPageObject = z.object({
  object: z.literal("page"),
  id: z.string(),
  created_time: z.string(), // ISO 8601 date format
  last_edited_time: z.string(), // ISO 8601 date format
  created_by: NotionUser,
  last_edited_by: NotionUser,
  cover: NotionCover,
  icon: NotionIcon,
  parent: z.object({
    type: z.string(), // Parent type, e.g., 'database_id', 'page_id'
    database_id: z.union([z.string(), z.null()]).optional(),
    page_id: z.union([z.string(), z.null()]).optional(),
    // Additional parent fields if necessary
  }),
  archived: z.boolean(),
  properties: NotionProperties,
  url: z.string().url(),
  public_url: z.union([z.string().url(), z.null()]),
  // Additional page fields if necessary
});

export const NotionApiResult = z.array(NotionPageObject);
