import { Form, useActionData } from "react-router-dom";
import { useRecoilState } from "recoil";
import { accountAtom } from "../recoil/atoms/recoils";
import { toDDMMYYY } from "../utils/convertDate";
import { useTranslation } from "react-i18next";

const CommentComponent = ({
  comments,
  post_id,
}: {
  comments: any[];
  post_id: string;
}) => {
  const [account, setAccount]: any = useRecoilState(accountAtom);
  const { t } = useTranslation();

  return (
    <>
      <div className="w-5/6 m-auto rounded-xl px-10 py-5 bg-neutral-100">
        <Form method="post">
          <label className="block mb-3 text-2xl font-sans text-sky-600">
            {account ? (
              account.account_name
            ) : (
              <>{t("Đăng nhập để bình luận")}</>
            )}
          </label>

          {account ? (
            <>
              <input
                name="content"
                className="mb-5 p-3 rounded-2xl w-11/12"
                placeholder="comment..."
                required
              />
              <button
                className="ml-2 bg-blue-500 text-white p-3 font-medium rounded-2xl hover:text-blue-400 hover:bg-white"
                type="submit"
              >
                {t("Bình luận")}
              </button>
              <input name="account_id" hidden value={account.account_id} />
              <input name="post_id" hidden value={post_id} />
            </>
          ) : (
            ""
          )}
        </Form>

        <div className="overflow-scroll h-64">
          {comments?.map((comment) => (
            <>
              <div className="mb-2">
                <div className="font-light text-xl mb-1">
                  {comment?.Account_Comment_account_idToAccount?.account_name}
                </div>
                <div>{comment?.content}</div>
                <div className="text-right pr-20">
                  {toDDMMYYY(comment?.created_date)}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommentComponent;
